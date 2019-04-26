<script>
	export let name = '';
	export let special = false;
	export let loggedIn = false;

	import { createEventDispatcher } from 'svelte';

   const dispatch = createEventDispatcher();

   function success() {
      dispatch('result', {
         status: true,
         user: {name: name, special: special, loggedIn: true}
      });
   }
   function fail() {
      dispatch('result', {
         status: false,
         user: {name: name, special: special, loggedIn: false}
      });
   }

</script>

<h1>Log In</h1>

<button on:click="{success}"> ok </button>
<button on:click="{fail}"> err </button>