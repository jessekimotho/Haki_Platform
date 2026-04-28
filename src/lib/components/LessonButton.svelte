<script lang="ts">
	export let src: string;
	export let alt: string;
	export let onClick: () => void = () => {};
	export let isLink = false;
	export let href = '';
</script>

{#if isLink}
	<a {href} class="madre kwer fisti kwer-4">
		<img {src} {alt} style="width: 150px; height: 150px;" />
	</a>
{:else}
	<div class="madre kwer" on:click={onClick} style="cursor: pointer;">
		<img {src} {alt} style="width: 150px; height: 150px;" />
	</div>
{/if}

<style>
	.madre {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
