<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';

	let clicked = 0;
</script>

<Paper>
	<Title>Welcome to SvelteKit</Title>
	<Content>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

		<Button on:click={() => clicked++}>
			<Label>Default</Label>
		</Button>

		{clicked}
	</Content>
</Paper>
