<script lang="ts">
  import Tab from "$lib/Tabs.svelte";
  import Tabs from "$lib/Tabs.svelte";
  import Search from "$lib/import/Search.svelte";
  import Goodreads from "$lib/import/Goodreads.svelte";
  import Calibre from "$lib/import/Calibre.svelte";

  let tabs: Tab[] = [
    {
      label: "Search",
      value: 1,
      component: Search
    },
    {
      label: "Goodreads",
      value: 2,
      component: Goodreads
    },
    {
      label: "Calibre",
      value: 3,
      component: Calibre
    }
  ]
</script>

<Tabs {tabs}/>
