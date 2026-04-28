<script lang="ts">
	export let chatContent: string;
	export let onNext: () => void;
	export let onBack: () => void;
</script>

<!-- CHAT BUBBLE -->
<div class="chathol animate__animated visible">
	{@html chatContent}
</div>

<!-- NEXT BUTTON -->
<div class="next first-next visible" on:click={onNext}></div>

<!-- BACK BUTTON -->
<div class="backer">
	<img class="animate__animated backimg closeback" on:click={onBack} src="/close.png" alt="Close background" />
	<img class="animate__animated backimg normalback" on:click={onBack} src="/back.png" alt="Normal background" />
</div>
