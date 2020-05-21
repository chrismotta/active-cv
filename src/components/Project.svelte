<script>
  export let title = "Project Title";
  export let subtitle = "Project subtitle";
  export let description = "";
  export let tags = [];
  export let highlight = "darkgrey";
  export let expanded = false;
</script>

<style>
  .tag {
    background: var(--highlight);
    color: white;
    padding: 0.4em;
    margin-right: 0.4em;
    border-radius: 0.4em;
  }
  .subtitle {
    filter: brightness(80%);
    font-weight: normal;
    margin-left: 0.1em;
  }
  .main {
    margin: 2em 0;
  }
</style>

<div class="main">
  <h3>
    {title}
    <span class="subtitle">| {subtitle}</span>
  </h3>
  {#if expanded}
    <h4>{description}</h4>
    <p>
      {#each tags as tag}
        <small class="tag" style="--highlight: {highlight}">{tag}</small>
      {/each}
    </p>
  {/if}
</div>
