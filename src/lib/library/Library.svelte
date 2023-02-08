<script lang="ts">
  import { createToggle } from "./toggle.js";
  import { sortKeys, sortBooks, cycleIdx } from "./sort.js";
	import Book from "$lib/Book.svelte";
	import CardView from "./CardView.svelte";
	import TableView from "./TableView.svelte";

  const card_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M17.999 17c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-12c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12zm-12-12h12l.002 10H5.999V5zm-2 14h16v2h-16z"></path></svg>';
  const table_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"></path></svg>'
  const filter_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg>'
  const sort_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z"></path></svg>'

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

  const viewState = createToggle(false);

  let sortIdx: number = 0
  $: books = sortBooks(books, sortKeys[sortIdx])
  $: console.log(sortKeys[sortIdx])
</script>

<div>
  <hgroup>
    <h1>Library</h1>
    <h4>Books Read</h4>
  </hgroup>

  <div class="options">
    <ul>
      <li><p>12 items</p></li>
    </ul>
    <ul>
     <li>
      <button
        round
        tt="{sortKeys[sortIdx]}"
        on:click={() => sortIdx = cycleIdx(sortIdx, sortKeys.length)}
      >
        {@html sort_icon}
      </button>
     </li>
    </ul>
    <ul>
      <li>
        <button round>
          {@html filter_icon}
        </button>
      </li>
    </ul>
    <ul>
      <li>
        {#if $viewState}
          <button
            round
            tt="Card view"
            on:click={viewState.toggle}
          >
            {@html card_icon}
          </button>
        {:else}
          <button
            round
            tt="Table view"
            on:click={viewState.toggle}
          >
            {@html table_icon}
          </button>
        {/if}
      </li>
    </ul>
  </div>

  {#if $viewState}
    <TableView {books}/>
  {:else}
    <CardView {books}/>
  {/if}

</div>

<style>
.options {
  display: flex;
}

.options ul li {
  list-style: none;
  margin-bottom: 0px;
}

.options > :nth-child(1) {
  margin-right: auto;
}

.options button {
  width: 40px;
  height: 40px;
  padding: 4px;

}

</style>
