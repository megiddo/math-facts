<script lang="ts">
	import { goto } from '$app/navigation';
	const additionUrl = new URL('./assets/math facts addition.svg', import.meta.url).href;
	const subtractionUrl = new URL('./assets/math facts subtraction.svg', import.meta.url).href;
	const multiplicationUrl = new URL('./assets/math facts multiplication.svg', import.meta.url).href;
	const divisionUrl = new URL('./assets/math facts division.svg', import.meta.url).href;
	const fractionsUrl = new URL('./assets/math facts fractions.svg', import.meta.url).href;

	const mathFactsNinja = new URL('./assets/math facts logo.svg', import.meta.url).href;

	export const prerender = true;
</script>

<div class="content">
	<div class="logo"><img src={mathFactsNinja} id="ninja-logo" alt="logo of a ninja" /></div>

	<div class="controls">
		<input
			type="image"
			on:click={() => goto('./cards/Addition')}
			src={additionUrl}
			alt="Addition sign; click here to practice Addition."
		/>

		<input
			type="image"
			on:click={() => goto('./cards/Subtraction')}
			src={subtractionUrl}
			alt="Subtraction sign; click here to practice Subtraction."
		/>

		<input
			type="image"
			on:click={() => goto('./cards/Multiplication')}
			src={multiplicationUrl}
			alt="Multiplication sign; click here to practice Multiplication."
		/>

		<input
			type="image"
			on:click={() => goto('./cards/Division')}
			src={divisionUrl}
			alt="Division sign; click here to practice Division."
		/>

		<input
			type="image"
			on:click={() => goto('./cards/Fractions')}
			src={fractionsUrl}
			alt="Fraction sign; click here to practice Fractions."
		/>
	</div>
</div>

<style>
	.content {
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		height: 100vh;
	}
	.controls,
	.logo {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.controls > input {
		flex: 1 0 40%;
		max-width: 40vw;
		max-height: 20vh;
	}
	#ninja-logo {
		max-width: 300px;
		max-height: 30vh;
	}
</style>
