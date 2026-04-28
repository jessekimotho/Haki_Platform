<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { conversationSteps } from './conversation.js';

	export let currentStep = 'first-next';

	const dispatch = createEventDispatcher();
	let userInteracted = false;
	let audioElements: Record<string, HTMLAudioElement> = {};

	onMount(() => {
		// Track user interaction for autoplay policy
		const handleInteraction = () => {
			userInteracted = true;
		};
		document.addEventListener('click', handleInteraction, { once: true });
		document.addEventListener('touchstart', handleInteraction, { once: true });

		// Initialize audio elements
		initializeAudioElements();

		return () => {
			document.removeEventListener('click', handleInteraction);
			document.removeEventListener('touchstart', handleInteraction);
		};
	});

	function initializeAudioElements() {
		// Get all audio elements from the DOM
		const audios = document.querySelectorAll('audio');
		audios.forEach((audio) => {
			if (audio.id) {
				audioElements[audio.id] = audio;
			}
		});
	}

	function safePlay(audioId: string) {
		if (userInteracted && audioElements[audioId]) {
			audioElements[audioId].play().catch((e) => console.log('Audio play failed:', e));
		}
	}

	function pauseAndReset(audioId: string) {
		if (audioElements[audioId]) {
			audioElements[audioId].pause();
			audioElements[audioId].currentTime = 0;
		}
	}

	function goToNextStep() {
		const step = conversationSteps[currentStep];
		if (!step) return;

		// Pause previous audio
		if (step.audioToPause) {
			pauseAndReset(step.audioToPause);
		}

		// Play new audio
		if (step.audioToPlay) {
			safePlay(step.audioToPlay);
		}

		// Move to next state
		if (step.nextState) {
			currentStep = step.nextState;
			dispatch('stepChange', currentStep);
		}
	}

	function goToPreviousStep() {
		// Implement back navigation logic
		// This would need a reverse mapping of steps
		console.log('Back navigation not yet implemented');
	}

	// Expose functions to parent
	export { goToNextStep, goToPreviousStep };
</script>
