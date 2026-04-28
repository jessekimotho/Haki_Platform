<script lang="ts">
	import { goto } from '$app/navigation';
	import { soundEnabled } from '$lib/stores';
	import SoundSelection from '$lib/components/SoundSelection.svelte';

	function handleSoundOn() {
		soundEnabled.set(true);
		goto('/homepage');
	}

	function handleSoundOff() {
		soundEnabled.set(false);
		goto('/homepage');
	}
</script>

<SoundSelection 
	onSoundOn={handleSoundOn}
	onSoundOff={handleSoundOff}
/>
