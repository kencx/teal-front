import Book from "../Book.svelte"

function dynamicSort(property: string) {
    return function(a: Book, b: Book) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}

export const sortKeys: string[] = ["title", "author", "rating", "date_added"]

export function sortBooks(books: Book[], sorted: string) {
    if (books.length) {
        if (sorted == 'title') {
            books = books.sort(dynamicSort("title"));
        }
        if (sorted == 'author') {
            books = books.sort(dynamicSort("author"));
        }
        if (sorted == 'rating') {
            books = books.sort(dynamicSort("rating"));
        }
        if (sorted == 'date_added') {
            books = books.sort(dynamicSort("date_added"));
        }
    }
    return books;
}

export function cycleIdx(idx: number, max: number) {
    if (idx + 1 >= max) {
        return 0
    } else {
        return idx + 1
    }
}
