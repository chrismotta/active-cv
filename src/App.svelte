<script>
  import { onMount } from "svelte";
  import TimeLine from "./components/TimeLine.svelte";

  export let name;
  export let api_url;

  const data = (async () => {
    const response = await fetch(api_url);
    return await response.json();
  })();
</script>

<style>
  main {
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  :global(body) {
    background: #333;
    color: #eee;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>{name}</h1>
  {#await data}
    <p>...loading</p>
  {:then data}
    <TimeLine {data} />
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</main>
