<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Library from '$lib/library/Library.svelte';
  import { page } from '$app/stores';
  export let data;
</script>

<h1>{data.title}</h1>
<p>{JSON.stringify($page, null, 2)}</p>

<Library books={data.books}/>

<style>
</style>
