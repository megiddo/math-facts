<script lang="ts">
	import { goto } from '$app/navigation';

	const mathFactsNinja = new URL('./assets/math facts logo.svg', import.meta.url).href;

	export const prerender = true;
</script>

<div class="content">
	<div class="logo"><img src={mathFactsNinja} id="ninja-logo" alt="logo of a ninja" /></div>
	<h1>Math Facts Ninja</h1>

	Math Facts Ninja uses spaced repetition to help your learner memorize their math facts, 1 &mdash;
	12:
	<ul>
		<li>Addition</li>
		<li>Subtraction</li>
		<li>Multiplication</li>
		<li>Division</li>
		<li>Fractions to Decimals (coming soon!)</li>
	</ul>

	Math Facts ninja is free and
	<a href="https://github.com/megiddo/math-facts">open source</a>.

	<a href="/privacy-policy.html">It has no trackers and is ad-free. No strings attached.</a>

	<p>You can get it for your favorite mobile devices here:</p>
	<div id="apps">
		<a href="https://apps.apple.com/us/app/math-facts-ninja/id6443783732">
			<img
				src="https://developer.apple.com/news/images/download-on-the-app-store-badge.png"
				alt="Apple App Store"
				style="width: 30%; margin: 0 auto; padding: 0;"
			/>
		</a>
	</div>
	<p>Or try it in any modern browser here:</p>
	<p>
		<a href="/play">Play in browser!</a>
	</p>
</div>

<style>
	.content {
		font-size: 12pt;
		font-family: serif;
		color: black;
		width: 50%;
		max-width: 400px;
		margin: 5% auto;
	}
	.logo {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 60%;
		margin-left: 20%;
	}
	h1 {
		font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;
		color: #ce2727;
		text-align: center;
	}
	img {
		width: 60%;
		margin-left: 20%;
	}
</style>
