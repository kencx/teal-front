<script lang="ts">
  let files:FileList;
</script>

<div>
  <h3>Import from Goodreads</h3>

  <form>
    <input
      type="file"
      id="goodreads"
      name="goodreads"
      accept=".csv"
      required
      bind:files
    />
    <small>Import Goodreads csv file</small>
    <br>
    <button type="submit">Submit</button>
  </form>
</div>

<style>
  button {
    width: 15%;
    min-width: 15vh;
  }
</style>
