<script>
	import { page } from '$app/stores'
	import { Header, Footer } from '$lib/templates'

	let { children } = $props();
	
	const globalSettings = $page.data.globalSettings

</script>

<svelte:head>
	<title>Daniel Groves • Bristol</title>
</svelte:head>

<Header />
<div id="content">
	{@render children?.()}
</div>
<Footer />