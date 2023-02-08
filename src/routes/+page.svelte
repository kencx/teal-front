<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Book from "$lib/Book.svelte";
	import Library from "$lib/library/Library.svelte";
  import QuickSearchBar from "svelte-quicksearch-bar";

  const onPick = e => selectedOption = e.detail;
  let options = [{label: "Example", link: "/"}];
  let selectedOption;

  let books: Book[] = [
    {
      id: 0,
      title: "Red Rising",
      authors: "Pierce Brown",
      cover: "/images/books/red-rising.jpg",
      rating: 4,
    },
    {
      id: 1,
      title: "Golden Son",
      authors: "Brown, Pierce",
      cover: "/images/books/golden-son.jpg",
      rating: 5,
    },
    {
      id: 1,
      title: "Golden Son",
      authors: "Brown, Pierce",
      cover: "/images/books/golden-son.jpg",
      rating: 5,
    },
    {
      id: 1,
      title: "Golden Son",
      authors: "Brown, Pierce",
      cover: "/images/books/golden-son.jpg",
      rating: 5,
    },
    {
      id: 1,
      title: "Golden Son",
      authors: "Brown, Pierce",
      cover: "/images/books/golden-son.jpg",
      rating: 5,
    },
    {
      id: 1,
      title: "Golden Son",
      authors: "Brown, Pierce",
      cover: "/images/books/golden-son.jpg",
      rating: 5,
    },
  ]
</script>

<QuickSearchBar {options} on:pick={onPick} keys={['label', 'link']} />

<hgroup>
  <h1>Library</h1>
  <h4>Books Read</h4>
</hgroup>

<Library {books}/>

<style>
</style>
