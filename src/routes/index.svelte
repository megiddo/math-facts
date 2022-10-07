<script lang="ts">
	import { goto } from '$app/navigation';

	export const prerender = true;
</script>

<h1>Math Facts</h1>

<div class="controls">
	<button on:click={() => goto('cards/Addition')}>Addition</button>

	<button on:click={() => goto('cards/Subtraction')}>Subtraction</button>

	<button on:click={() => goto('cards/Multiplication')}>Multiplication</button>

	<button on:click={() => goto('cards/Division')}>Division</button>
</div>

<style>
	.controls {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	h1 {
		text-align: center;
		font-size: 8vh;
	}
	button {
		width: 90vw;
		font-size: 4vh;
		margin: 1vw;
		background-color: gold;
		display: block;
		padding: 0.5em;
		margin-bottom: 5vw;
	}
</style>
