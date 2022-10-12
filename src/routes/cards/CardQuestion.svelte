<script>
	import { cards } from '$lib/cards';

	export let terms = [1, 1];
	export let operator = '&times;';
</script>

<h1>{terms[0]} {@html operator} {terms[1]}</h1>

<style>
	h1 {
		font-size: 10vh;
		text-align: center;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		color: #22262aff;
	}
</style>
