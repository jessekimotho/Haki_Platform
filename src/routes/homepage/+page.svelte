<script lang="ts">
	import { goto } from '$app/navigation';
	import { conversationState } from '$lib/stores';
	import { conversationSteps } from '$lib/conversation';
	import Homepage from '$lib/components/Homepage.svelte';

	function startLesson(lessonStep: string) {
		conversationState.update(state => ({
			...state,
			currentStep: lessonStep
		}));
		goto('/conversation');
	}

	function handleWhatRightsClick() {
		startLesson('first-next');
	}

	function handleProtectRightsClick() {
		startLesson('seconde-next');
	}

	function handleViolateClick() {
		startLesson('thirde-next');
	}

	function handleComplaintClick() {
		startLesson('fourthe-next');
	}
</script>

<Homepage 
	onWhatRightsClick={handleWhatRightsClick}
	onProtectRightsClick={handleProtectRightsClick}
	onViolateClick={handleViolateClick}
	onComplaintClick={handleComplaintClick}
/>
