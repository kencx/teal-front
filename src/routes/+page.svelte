<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Library from "$lib/library/Library.svelte";
  import QuickSearchBar from "svelte-quicksearch-bar";

  const onPick = e => selectedOption = e.detail;
  let options = [{label: "Example", link: "/"}];
  let selectedOption;
</script>

<QuickSearchBar {options} on:pick={onPick} keys={['label', 'link']} />

<Library/>

<style>
</style>
