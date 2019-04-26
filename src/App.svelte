<script>
   import Greeter from './Greeter.svelte';
   import LoginForm from './LoginForm.svelte';

   export let title;
   let user = {};
   let places = [{order: 0, place: 'greet'}, {order: 1, place: 'main'}];
   let place = 'greet';


   $: greeterCfg = {name: user.name, special: user.special};


   function nav(plc) {
      console.log('nav', arguments);
	   place = plc;
   }

   function logIn(evt) {
      console.log('logIn', arguments);
      user = evt.detail.user;
      nav('greet');
   }

</script>

<svelte:head>
   <title>{title}</title>
</svelte:head>
<style>
	h1 {
		color: purple;
	}
</style>

<h1>{title}</h1>

{#if !user.logedIn }
   {#if place === 'login' }
      <button on:click="{e => nav('greet')}" >
         Cancel
      </button>
   {:else}
      <button on:click|once|preventDefault="{e => nav('login')}" >
         Log In...
      </button>
   {/if}
{:else}
   <small>{user.name} loged in</small>
   <div>
      <ul>
      	{#each places as {order, place}, i }}
      		<li><a href="#" on:click="{e => nav(place)}">
      			{place} ({i})
      		</a></li>
      	{/each}
      </ul>
   </div>
{/if}

{#if place === 'greet' }
   <Greeter {... greeterCfg}/>
{:else if place === 'login' }
   <LoginForm name="{user.name}" logedIn="{user.logedIn}" on:result="{logIn}"/>
{/if}