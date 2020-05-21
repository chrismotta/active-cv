<script>
  import Project from "./Project.svelte";
  export let highlight = "darkgrey";
  export let year = "";
  export let title = "";
  export let subtitle = "";
  export let projects = [];

  let expanded = false;
  const toggleExpand = () => {
    expanded = !expanded;
  };
</script>

<style>
  :root {
    --arrow-skew: 30deg;
  }
  .container {
    display: grid;
    grid-template-columns: 5em 1.5em 8fr;
    column-gap: 1em;
    transition: filter 500ms;
  }
  .container:hover {
    filter: brightness(130%);
  }
  .container:hover .line {
    box-shadow: -0.6em 0.6em 0.5em rgba(0, 0, 0, 0.3);
  }
  .line {
    box-shadow: -0.5em 0.5em 0.5em rgba(0, 0, 0, 0.2);
    position: relative;
    margin: 0.1em 0;
    transition: box-shadow 500ms;
  }
  .line::before,
  .line::after {
    position: absolute;
    top: 0px;
    content: "";
    width: 50%;
    height: 100%;
    background: var(--highlight);
  }
  .line::before {
    left: 0px;
    transform: skew(0, var(--arrow-skew));
  }
  .line::after {
    filter: brightness(80%);
    right: 0px;
    transform: skew(0, calc(var(--arrow-skew) * -1));
  }
  h1 {
    color: var(--highlight);
  }
  .year * {
    text-align: right;
  }
  .expand {
    padding: 0.2em;
    margin: 0 0 1em 0;
    border: 0.05em solid white;
    font-size: 1em;
    cursor: pointer;
  }
</style>

<div class="container">
  <span class="year">
    <h1 style="--highlight: {highlight}">{year}</h1>
  </span>
  <span class="line" style="--highlight: {highlight}" />
  <span class="event">
    <h1 style="--highlight: {highlight}">{title}</h1>
    <h2>{subtitle}</h2>
    {#each projects as props}
      <Project {...props} {highlight} {expanded} />
    {/each}
    <span class="expand" on:click={toggleExpand}>+</span>
  </span>
</div>
