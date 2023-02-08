<script lang="ts">
  let files:FileList;
</script>

<div>
  <h3>Calibre Library</h3>

  <form>
    <input
      type="file"
      id="calibre"
      name="calibre"
      accept=".db"
      required
      bind:files
    />
    <small>Read Calibre metadata.db</small>
    <br>
    <button type="submit">Submit</button>
  </form>
</div>

{#if files}
	<h2>Selected files:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes) </p>
	{/each}
{/if}

<style>
  button {
    width: 15%;
    min-width: 15vh;
  }
</style>
