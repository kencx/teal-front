const unslugify = (slug: string) => slug
    .replace(/\-/g, " ")
    .replace(/\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() //titlecase
    );

export const load = ({ params }) => {
    return {
        title: unslugify(params.slug),
        slug: params.slug,
        books: [
            {
                id: 0,
                title: "Red Rising",
                authors: "Pierce Brown",
                cover: "/images/books/red-rising.jpg",
                rating: 4,
            },
        ]
    }
}
