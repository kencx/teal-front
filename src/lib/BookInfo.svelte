<script lang="ts" context="module">
</script>

<script lang="ts">
	import Book from "$lib/Book.svelte";
  let book = {
    id: 0,
    isbn: "0345539788",
    isbn13: "",
    title: "Red Rising",
    subtitle: "",
    authors: ["Pierce Brown", "John Adams", "Susan Williams"],
    cover: "/images/books/red-rising.jpg",
    publisher: "Del Rey Books",
    published: "2014-01-28",
    series: "Red Rising",
    genre: "Science Fiction",
    tags: ["Science Fiction", "Space Opera", "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."],
    rating: 5,
    date_added: "",
    date_read: "",
  }

function tagify(str: string) {
  if (str.length >= 18) {
    str = str.substring(0, 20);
    str += "...";
  }
  return str;
}

function slugify(str: string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-')   // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
}
</script>

<div>
  <div class="info">
    <hgroup>
      <h1>{book.title}</h1>
      <h2>{book.subtitle}</h2>
      <h3>
        {#each book.authors as author}
          <span class="author"><a href="/authors/{slugify(author)}">{author}</a></span>
        {/each}
      </h3>
    </hgroup>

    <div class="cover">
      <img alt="" src="{book.cover}"/>
    </div>

    <div class="metadata">
        <span><b>ISBN</b>: {book.isbn}</span>,
        <span><b>ISBN13</b>: {book.isbn13}</span>
        <br>
        <span>{book.publisher}</span>,
        <span>{book.published}</span>
        <br>
        <div class="tags">
          {#each book.tags.map(tagify) as tag}
            <tag>
              <a href="/tags/{slugify(tag)}">{tag}</a>
            </tag>
          {/each}
        </div>
    </div>
  </div>

  <div>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
    culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
    voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
    elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
    laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex
    in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
    sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
    et culpa duis.

    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet saepe quidem
    quisquam vel reprehenderit iste error consequatur ab iure aperiam. Nihil explicabo,
    saepe porro aperiam dolorem similique ab reiciendis. Ad.

    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
    culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
    cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
    amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
    officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
    dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id
    nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
    commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.

    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
    culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
    cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
    amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
    officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
    dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id
    nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
    commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.
  </div>
</div>

<style>
.info {
  display: grid;
  gap: 1rem 2rem;
  grid-template-columns: 180px 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "a b"
    "a c";
  margin-bottom: 2rem;
}

.cover {
  grid-area: a;
  display: flex;
  place-items: center;
  max-width: 180px;
}

.author + .author::before {
  display: inline-block;
  white-space: pre;
  content: ", ";
}

.metadata {
  grid-area: c;
  color: var(--muted-color);
}

.metadata > .tags {
  padding: 1.2rem 0 1.2rem 0;
}
</style>
