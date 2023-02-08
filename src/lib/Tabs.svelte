<script lang="ts" context="module">
  export type Tab = {
    label: string,
    value: number,
    component: any
  }
</script>

<script lang="ts">
  export let tabs: Tab[];
  export let activeTabValue: number = 1;

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul class="tab-bar">
  {#each tabs as tab}
    <li
      class={activeTabValue === tab.value ? 'active' : ''}
      on:click={handleClick(tab.value)}
    >
      {tab.label}
    </li>
  {/each}
</ul>

{#each tabs as tab}
	{#if activeTabValue == tab.value}
    <div class="tab">
      <svelte:component this={tab.component}/>
    </div>
	{/if}
{/each}

<style>
	.tab {
		margin-bottom: 10px;
		padding: 40px;
	}

  .tab-bar {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #679;
  }

	.tab-bar li {
    display: block;
    padding: 0.5rem 1rem;
    margin-bottom: -1px;
    text-transform: none;
    cursor: pointer;
  }

  .tab-bar li:hover, li.active {
    color: #679;
    border-bottom: 4px solid #679;
  }
</style>
