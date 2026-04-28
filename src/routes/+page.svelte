<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { soundEnabled } from '$lib/stores';
	import IntroScreen from '$lib/components/IntroScreen.svelte';
	import BackgroundCanvas from '$lib/components/BackgroundCanvas.svelte';
	import BackgroundCircles from '$lib/components/BackgroundCircles.svelte';

	let isLoading = true;
	let showIntro = false;

	onMount(() => {
		// Initialize sound preference from localStorage
		soundEnabled.initialize();

		// Hide loading screen after initialization
		setTimeout(() => {
			isLoading = false;
			showIntro = true;
		}, 1000);

		// Initialize canvas color change animation
		initCanvasAnimation();
	});

	function handleStarterClick() {
		// Check if sound preference was previously set
		const storedSound = browser ? localStorage.getItem('haki-sound-enabled') : null;
		if (storedSound !== null) {
			// Sound preference exists, skip to homepage
			goto('/homepage');
		} else {
			// Show sound selection screen
			goto('/sound-selection');
		}
	}

	function initCanvasAnimation() {
		// @ts-ignore
		if (typeof anime === 'undefined') {
			console.warn('anime.js not loaded');
			return;
		}

		// @ts-ignore
		var c = document.getElementById("c");
		// @ts-ignore
		var ctx = c.getContext("2d");
		var cH: number;
		var cW: number;
		var bgColor = "#EC7201";
		var animations: any[] = [];
		var circles: any[] = [];

		// @ts-ignore
		var colorPicker = (function() {
			var colors = ["#BCEB01", "#F1C40F", "#01EA5E", "#0144E8", "#01DCE9", "#6E01E8", "#E70101", "#E801B1", "#FF6138", "#FFBE53", "#2980B9", "#282741", "#EC7201", ];
			var index = 0;

			function next() {
				index = index++ < colors.length - 1 ? index : 0;
				return colors[index];
			}

			function current() {
				return colors[index];
			}
			return {
				next: next,
				current: current
			}
		})();

		function removeAnimation(animation: any) {
			var index = animations.indexOf(animation);
			if (index > -1) animations.splice(index, 1);
		}

		function calcPageFillRadius(x: number, y: number) {
			var l = Math.max(x - 0, cW - x);
			var h = Math.max(y - 0, cH - y);
			return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
		}

		function addClickListeners() {
			document.addEventListener("mousedown", handleEvent);
		};

		function handleEvent(e: any) {
			if (e.touches) {
				e.preventDefault();
				e = e.touches[0];
			}
			var currentColor = colorPicker.current();
			var nextColor = colorPicker.next();
			var targetR = calcPageFillRadius(e.pageX, e.pageY);
			var rippleSize = Math.min(200, (cW * .4));
			var minCoverDuration = 750;

			// @ts-ignore
			var pageFill = new Circle({
				x: e.pageX,
				y: e.pageY,
				r: 0,
				fill: nextColor
			});
			// @ts-ignore
			var fillAnimation = anime({
				targets: pageFill,
				r: targetR,
				duration: Math.max(targetR / 2, minCoverDuration),
				easing: "easeOutQuart",
				complete: function() {
					bgColor = pageFill.fill;
					removeAnimation(fillAnimation);
				}
			});

			// @ts-ignore
			var ripple = new Circle({
				x: e.pageX,
				y: e.pageY,
				r: 0,
				fill: currentColor,
				stroke: {
					width: 3,
					color: currentColor
				},
				opacity: 1
			});
			// @ts-ignore
			var rippleAnimation = anime({
				targets: ripple,
				r: rippleSize,
				opacity: 0,
				easing: "easeOutExpo",
				duration: 900,
				complete: removeAnimation
			});

			var particles: any[] = [];
			for (var i = 0; i < 32; i++) {
				// @ts-ignore
				var particle = new Circle({
					x: e.pageX,
					y: e.pageY,
					fill: currentColor,
					r: anime.random(24, 48)
				})
				particles.push(particle);
			}
			// @ts-ignore
			var particlesAnimation = anime({
				targets: particles,
				x: function(particle: any) {
					return particle.x + anime.random(rippleSize, -rippleSize);
				},
				y: function(particle: any) {
					return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
				},
				r: 0,
				easing: "easeOutExpo",
				duration: anime.random(400, 1300),
				complete: removeAnimation
			});
			animations.push(fillAnimation, rippleAnimation, particlesAnimation);
		}

		function extend(a: any, b: any) {
			for (var key in b) {
				if (b.hasOwnProperty(key)) {
					a[key] = b[key];
				}
			}
			return a;
		}

		// @ts-ignore
		var Circle = function(opts: any) {
			extend(this, opts);
		}

		// @ts-ignore
		Circle.prototype.draw = function() {
			ctx.globalAlpha = this.opacity || 1;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
			if (this.stroke) {
				ctx.strokeStyle = this.stroke.color;
				ctx.lineWidth = this.stroke.width;
				ctx.stroke();
			}
			if (this.fill) {
				ctx.fillStyle = this.fill;
				ctx.fill();
			}
			ctx.closePath();
			ctx.globalAlpha = 1;
		}

		// @ts-ignore
		var animate = anime({
			duration: Infinity,
			update: function() {
				ctx.fillStyle = bgColor;
				ctx.fillRect(0, 0, cW, cH);
				animations.forEach(function(anim: any) {
					anim.animatables.forEach(function(animatable: any) {
						animatable.target.draw();
					});
				});
			}
		});

		var resizeCanvas = function() {
			cW = window.innerWidth;
			cH = window.innerHeight;
			c.width = cW * window.devicePixelRatio;
			c.height = cH * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		(function init() {
			resizeCanvas();
			window.addEventListener("resize", resizeCanvas);
			addClickListeners();
			handleInactiveUser();
		})();

		function handleInactiveUser() {
			var inactive = setTimeout(function() {
				fauxClick(cW / 2, cH / 2);
			}, 2000);

			function clearInactiveTimeout() {
				clearTimeout(inactive);
				document.removeEventListener("mousedown", clearInactiveTimeout);
			}

			document.addEventListener("mousedown", clearInactiveTimeout);
		}

		function fauxClick(x: number, y: number) {
			var fakeEvent = {
				pageX: x,
				pageY: y
			};
			handleEvent(fakeEvent);
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/style.css" />
	<link rel="stylesheet" href="/animate.min.css" />
</svelte:head>

<div class="full-bod">
	<!-- PWA INSTALL WARNING -->
	<div class="pwashow">
		<div class="pwainstaller">
			<img class="pwahaki" src="/haki.png" alt="Haki Logo" />
			<img class="pwaguga" src="/googleplay.png" alt="Google Play" />
			<span class="pwainstr">Install the Haki App or change your device orientation to landscape mode to continue</span>
		</div>
	</div>

	<!-- LOADING SCREEN -->
	{#if isLoading}
	<div class="loader-hol">
		<div class="loader">
			<div class="contu">
				<div class="mwili">
					<span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</span>
					<div class="base">
						<span></span>
						<div class="face"></div>
					</div>
				</div>
				<div class="longfazers">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<h1>LOADING</h1>
			</div>
			<style>
				.contu {
					background-color: black;
					overflow: hidden;
				}
				.contu H1 {
					position: absolute;
					color: #F1C40F;
					font-weight: 600;
					font-size: 1.5em;
					text-transform: uppercase;
					left: 50%;
					top: 58%;
					margin-left: -28px;
				}
				.mwili {
					position: absolute;
					top: 50%;
					margin-left: -50px;
					left: 50%;
					animation: speeder 0.4s linear infinite;
				}
				.mwili>SPAN {
					height: 5px;
					width: 35px;
					position: absolute;
					background: #F1C40F;
					top: -19px;
					left: 60px;
					border-radius: 2px 10px 1px 0;
				}
				.base SPAN {
					position: absolute;
					width: 0;
					height: 0;
					border-top: 6px solid transparent;
					border-right: 100px solid #F1C40F;
					border-bottom: 6px solid transparent;
				}
				.base SPAN:before {
					content: "";
					height: 22px;
					width: 22px;
					border-radius: 50%;
					background: #F1C40F;
					position: absolute;
					right: -110px;
					top: -16px;
				}
				.base SPAN:after {
					content: "";
					position: absolute;
					width: 0;
					height: 0;
					border-top: 0 solid transparent;
					border-right: 55px solid #F1C40F;
					border-bottom: 16px solid transparent;
					top: -16px;
					right: -98px;
				}
				.face {
					position: absolute;
					height: 12px;
					width: 20px;
					background: #F1C40F;
					border-radius: 20px 20px 0 0;
					transform: rotate(-40deg);
					right: -125px;
					top: -15px;
				}
				.face:after {
					content: "";
					height: 12px;
					width: 12px;
					background: #F1C40F;
					right: 4px;
					top: 7px;
					position: absolute;
					transform: rotate(40deg);
					transform-origin: 50% 50%;
					border-radius: 0 0 0 2px;
				}
				.mwili>SPAN>SPAN:nth-child(1),
				.mwili>SPAN>SPAN:nth-child(2),
				.mwili>SPAN>SPAN:nth-child(3),
				.mwili>SPAN>SPAN:nth-child(4) {
					width: 30px;
					height: 1px;
					background: #F1C40F;
					background: #F1C40F;
					position: absolute;
					animation: fazer1 0.2s linear infinite;
				}
				.mwili>SPAN>SPAN:nth-child(2) {
					top: 3px;
					animation: fazer2 0.4s linear infinite;
				}
				.mwili>SPAN>SPAN:nth-child(3) {
					top: 1px;
					animation: fazer3 0.4s linear infinite;
					animation-delay: -1s;
				}
				.mwili>SPAN>SPAN:nth-child(4) {
					top: 4px;
					animation: fazer4 1s linear infinite;
					animation-delay: -1s;
				}
				@keyframes fazer1 {
					0% { left: 0; }
					100% { left: -80px; opacity: 0; }
				}
				@keyframes fazer2 {
					0% { left: 0; }
					100% { left: -100px; opacity: 0; }
				}
				@keyframes fazer3 {
					0% { left: 0; }
					100% { left: -50px; opacity: 0; }
				}
				@keyframes fazer4 {
					0% { left: 0; }
					100% { left: -150px; opacity: 0; }
				}
				@keyframes speeder {
					0% { transform: translate(2px, 1px) rotate(0deg); }
					10% { transform: translate(-1px, -3px) rotate(-1deg); }
					20% { transform: translate(-2px, 0px) rotate(1deg); }
					30% { transform: translate(1px, 2px) rotate(0deg); }
					40% { transform: translate(1px, -1px) rotate(1deg); }
					50% { transform: translate(-1px, 3px) rotate(-1deg); }
					60% { transform: translate(-1px, 1px) rotate(0deg); }
					70% { transform: translate(3px, 1px) rotate(-1deg); }
					80% { transform: translate(-2px, -1px) rotate(1deg); }
					90% { transform: translate(2px, 1px) rotate(0deg); }
					100% { transform: translate(1px, -2px) rotate(-1deg); }
				}
				.longfazers {
					position: absolute;
					width: 100%;
					height: 100%;
				}
				.longfazers SPAN {
					background: #F1C40F !important;
					position: absolute;
					height: 2px;
					width: 20%;
					background: #F1C40F;
				}
				.longfazers SPAN:nth-child(1) {
					top: 20%;
					animation: lf 0.6s linear infinite;
					animation-delay: -5s;
				}
				.longfazers SPAN:nth-child(2) {
					top: 40%;
					animation: lf2 0.8s linear infinite;
					animation-delay: -1s;
				}
				.longfazers SPAN:nth-child(3) {
					top: 60%;
					animation: lf3 0.6s linear infinite;
				}
				.longfazers SPAN:nth-child(4) {
					top: 80%;
					animation: lf4 0.5s linear infinite;
					animation-delay: -3s;
				}
				@keyframes lf {
					0% { left: 200%; }
					100% { left: -200%; opacity: 0; }
				}
				@keyframes lf2 {
					0% { left: 200%; }
					100% { left: -200%; opacity: 0; }
				}
				@keyframes lf3 {
					0% { left: 200%; }
					100% { left: -100%; opacity: 0; }
				}
				@keyframes lf4 {
					0% { left: 200%; }
					100% { left: -100%; opacity: 0; }
				}
			</style>
		</div>
	</div>
	{/if}

	<!-- BACKGROUND -->
	<BackgroundCanvas />
	<BackgroundCircles />

	<!-- INTRO SCREEN -->
	{#if showIntro}
	<!-- INITIALIZER -->
	<div class="starter" style="z-index: 10000;" on:click={handleStarterClick}></div>

	<!-- CHARACTER IMAGES -->
	<img src="/fortaji.png" class="fortaji animate__animated" alt="Taji" />
	<img src="/fortemi.png" class="fortemi animate__animated" alt="Temi" />

	<!-- MAIN APP CONTAINER -->
	<div class="alihold">
		<span class="disclaimer">click anywhere to continue</span>
		<IntroScreen />
	</div>
	{/if}
</div>
