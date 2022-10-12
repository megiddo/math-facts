<script lang="ts">
	import { cards } from '$lib/cards';
	import { CardDb } from '$lib/classes/CardDb';
	import CardAnswer from './CardAnswer.svelte';
	import CardQuestion from './CardQuestion.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let cardDb: CardDb;
	let answerDisplayMode: any = {};

	let resetAnswerDisplay = () => {
		answerDisplayMode = {};
		cardDb.Decks[$page.params.slug]
			.current()
			.answers()
			.forEach((element: number) => {
				answerDisplayMode['e' + element] = '';
			});
	};

	let answerSelectedHandler = (event: any) => {
		answerDisplayMode['e' + event.detail.answerValue] = 'highlighted';
	};

	cards.subscribe((v) => {
		cardDb = v;
		resetAnswerDisplay();
	});

	export const prerender = false;
</script>

<CardQuestion
	terms={cardDb.Decks[$page.params.slug].current().terms()}
	operator={cardDb.Decks[$page.params.slug].operator}
/>

<div class="answers">
	{#each cardDb.Decks[$page.params.slug].current().answers() as _, i}
		<CardAnswer
			answerValue={_}
			mode={$page.params.slug}
			on:answerSelectedMessage={answerSelectedHandler}
			displayMode={answerDisplayMode}
		/>
	{/each}
</div>

<div class="scores">
	<div class="control">
		<button
			class="home"
			on:click={() => {
				cardDb.Decks[$page.params.slug].correct = 0;
				cardDb.Decks[$page.params.slug].missed = 0;
				goto('/');
			}}>Home</button
		>
	</div>
	<span class="correct">&check; {cardDb.Decks[$page.params.slug].correct}</span>
	<span class="speed">SPD: {390 - cardDb.Decks[$page.params.slug].cards.length}</span>
	<span class="missed">&times; {cardDb.Decks[$page.params.slug].missed}</span>
</div>

<style>
	.home {
		width: 50vw;
		font-size: 4vh;
		margin: 1vw;
		background-color: #f2f4f5ff;
		border: 1px solid #404851ff;
		display: block;
		padding: 0.5em;
		color: black;
		position: relative;
	}
	.answers {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.control {
		position: absolute;
		bottom: 12vh;
		text-align: center;
		display: block;
		width: 50vw;
		left: 25vw;
		font-size: 1.5em;
	}
	.correct {
		color: #27ce27ff;
	}
	.missed {
		color: #ce2727ff;
	}
	.scores {
		position: absolute;
		bottom: 1.5vh;
		text-align: center;
		font-size: 2em;
		display: flex;
		justify-content: space-around;
		width: 100%;
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.scores span {
		display: block;
		text-align: center;
	}
</style>
