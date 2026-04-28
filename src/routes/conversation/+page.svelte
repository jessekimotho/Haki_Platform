<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { conversationSteps } from '$lib/conversation';
	import { soundEnabled, conversationState } from '$lib/stores';
	import ConversationViewer from '$lib/components/ConversationViewer.svelte';

	$: $conversationState;
	$: $soundEnabled;

	onMount(() => {
		startConversation();
	});

	function startConversation() {
		const step = conversationSteps[$conversationState.currentStep];
		if (step) {
			conversationState.update(state => ({
				...state,
				chatContent: step.content,
				currentSpeaker: step.speaker
			}));
			if ($soundEnabled) {
				const audioElement = document.getElementById(step.audioToPlay) as HTMLAudioElement;
				if (audioElement) {
					audioElement.play().catch(err => console.log('Audio play error:', err));
				}
			}
		}
	}

	function handleNext() {
		const step = conversationSteps[$conversationState.currentStep];
		if (step) {
			if ($soundEnabled) {
				const audioElement = document.getElementById(step.audioToPause) as HTMLAudioElement;
				if (audioElement) {
					audioElement.pause();
				}
			}
			const nextStepKey = step.nextState;
			if (nextStepKey && conversationSteps[nextStepKey]) {
				conversationState.update(state => ({
					...state,
					currentStep: nextStepKey
				}));
				startConversation();
			}
		}
	}

	function goBackToHomepage() {
		goto('/homepage');
	}
</script>

<ConversationViewer 
	chatContent={$conversationState.chatContent}
	onNext={handleNext}
	onBack={goBackToHomepage}
/>

<!-- AUDIO ELEMENTS -->
<audio preload="auto" id="noise" loop>
	<source src="/audio/rib.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="videosa">
	<source src="/audio/videos.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="playa">
	<source src="/audio/play.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="learna">
	<source src="/audio/learn.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="certa">
	<source src="/audio/cert.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="backa">
	<source src="/audio/back.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="homa">
	<source src="/audio/home.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="firsta">
	<source src="/audio/first.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="seconda">
	<source src="/audio/second.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="thirda">
	<source src="/audio/third.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="fourtha">
	<source src="/audio/fourth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="fiftha">
	<source src="/audio/fifth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="sixtha">
	<source src="/audio/sixth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="seventha">
	<source src="/audio/seventh.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="eightha">
	<source src="/audio/eighth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="nintha">
	<source src="/audio/ninth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="tentha">
	<source src="/audio/tenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="eleventha">
	<source src="/audio/eleventh.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="twelftha">
	<source src="/audio/twelfth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="thirteentha">
	<source src="/audio/thirteenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="fourteentha">
	<source src="/audio/fourteenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="fifteentha">
	<source src="/audio/fifteenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="sixteentha">
	<source src="/audio/sixteenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="seventeentha">
	<source src="/audio/seventeenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="eighteentha">
	<source src="/audio/eighteenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="nineteentha">
	<source src="/audio/nineteenth.mp3" type="audio/mpeg" />
</audio>
<audio preload="auto" id="twentietha">
	<source src="/audio/twentieth.mp3" type="audio/mpeg" />
</audio>
