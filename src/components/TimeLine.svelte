<script>
  import TimeStep from "./TimeStep.svelte";

  export let data = [];
</script>

<style>
  .container {
    /* display: grid;
    grid-template-columns: 1fr 1.5em 8fr;
    column-gap: 1em; */
  }
</style>

<div class="container">
  {#each data as props, i}
    <TimeStep {...props} />
  {/each}
</div>
