<script lang="ts" context="module">
</script>

<script lang="ts">
	import Book from "$lib/Book.svelte";
	export let books: Book[];
</script>


<div>
  <table>
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Rating</th>
      </tr>
    </thead>
    <tbody>
      {#each books as book}
        <tr>
          <th scope="row"><a href="book">{book.title}</a></th>
          <td>{book.authors}</td>
          <td>{book.rating}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
tr:hover {
  background-color: var(--secondary-focus);
}

</style>
