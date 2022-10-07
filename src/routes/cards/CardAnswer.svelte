<script>
	import { cards } from '$lib/cards';
	import { createEventDispatcher } from 'svelte';

	const answerSelectedEvent = createEventDispatcher();

	export let answerValue = 0;
	export let mode = 'multiplication';
	export let displayMode = '';
</script>

<button
	class={displayMode['e' + answerValue]}
	on:click={() => {
		answerSelectedEvent('answerSelectedMessage', {
			answerValue: answerValue
		});
		let priorIncorrect = -1;
		for (const e in displayMode) priorIncorrect += displayMode[e] != '' ? 1 : 0;
		if (answerValue == cards.current(mode).answer) {
			cards.answer(mode, cards.current(mode), priorIncorrect ? -1 : answerValue);
			cards.next(mode);
		}
	}}>{answerValue}</button
>

<style>
	button {
		width: 3em;
		height: 3em;
		background-color: aquamarine;
		font-size: 6vh;
		margin: 1vw;
		position: relative;
	}
	.highlighted {
		background-color: hotpink !important;
	}
	.wrongAnswer {
		position: absolute;
		left: 0;
		top: 0;
		width: 3em;
		height: 3em;
		display: block;
		font-size: 3em;
	}
</style>
