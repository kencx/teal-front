<script lang="ts" context="module">
</script>

<script lang="ts">
	import Book from "$lib/Book.svelte";
	export let books: Book[];
</script>

<div class="card-view">
  {#each books as book}
    <div class="book-card">
      <div class="cover">
        <a href="book">
          <img alt="" src="{book.cover}"/>
        </a>
      </div>

      <div>
        <p style="margin-bottom: 0px;">{book.title}</p>
        <p style="font-size: 1.25rem;">{book.authors}</p>
      </div>
    </div>
  {/each}
</div>

<style>
.card-view {

  /* auto scaling grid with max num of columns and min width*/
  /* https://css-tricks.com/an-auto-filling-css-grid-with-max-columns/ */
  --grid-layout-gap: 1.4rem;
  --grid-column-count: 5;
  --grid-item--min-width: 160px;

  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
}

.book-card {
	display: flex;
	flex-direction: column;
  /* place-items: center; */
  max-width: 180px;
  /* max-height: 260px; */
  /* border: 1px solid black; */
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
}

.book-card:hover {
  transform: translateY(4px);
}

.book-card:hover img {
  transform: scale3d(1.02, 1.02, 1.02);
  opacity: 0.2;
}

.cover {
  max-width: 180px;
  /* max-height: 260px; */
}

.cover img {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  /* border-radius: 0.4rem; */
}
</style>
