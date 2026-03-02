<script>
  const { data } = $props()
</script>
<svelte:head>
	<title>Who • Daniel Groves</title>
</svelte:head>

<div class="container">
  <h1>Pages</h1>
  {JSON.stringify(data.pages)}
</div>