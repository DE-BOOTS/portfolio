<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { fetchQuote } from './fetch';

	let quote;
	let status = 'Loading...';

	onMount(async () => {
		try {
			quote = await fetchQuote();
			status = '';
		} catch (e) {
			// @ts-ignore
			status = e.message;
		}
	});
</script>

<h3>BootsyCoderNk's Awesome Website</h3>
<p>This is my website. Thank you for checking it out!</p>
<h3>Daily Quote</h3>
{#if status}
	<h4>{status}</h4>
{:else}
	<blockquote class="blockquote">
		<p class="mb-0">{quote.text}</p>
	</blockquote>
	<footer class="blockquote-footer">
		{quote.author}
	</footer>
{/if}

<style>
	h3 {
		font-weight: 700;
	}
</style>
