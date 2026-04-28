<script lang="ts">
	export let onSoundOn: () => void;
	export let onSoundOff: () => void;
</script>

<div class="soundconfirm">
	<div class="spinje spin-on" on:click={onSoundOn}>
		<img src="/speka.png" alt="Sound On" />
	</div>
	<div class="spinje spin-off" on:click={onSoundOff}>
		<img src="/spekaoff.png" alt="Sound Off" />
	</div>
</div>

<style>
	.soundconfirm {
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}
</style>
