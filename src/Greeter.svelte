<script>
	export let name = 'unknown';
	let message = '';

	$: if (name !== 'unknown' && $$props.special) {
	   message = 'You are welcome! ' + name;
	} else {
	   message = 'Hello ' + name;
	}

   let timeDef = new Promise((resolve) => {
      setTimeout(resolve.bind(this, new Date()), 900)
   });
</script>

<h1>{message}</h1>
{#await timeDef}
   <p>wait for it...</p>
{/await}
