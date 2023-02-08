<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
</script>

<main class="container">
    <Navbar/>

  <section>
    <slot></slot>
  </section>
</main>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
</style>
