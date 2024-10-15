import bookTemplate from "./books.hbs";

const data = {
  books: [
    {
      title: "Little Prince",
      author: "Antoine de Saint-Exupery",
      publisher: "Wordsworth Editions",
      year_released: "1998",
      how_many_pages: "112",
    },
    {
      title: "Charlie and the Chocolate Factory",
      author: "Roald Dahl",
      publisher: "Penguin Random House UK",
      year_released: "2023",
      how_many_pages: "336",
    },
    {
      title: "Cruel Prince. Book 1",
      author: "Holly Black",
      publisher: "Bonnier UK",
      year_released: "2018",
      how_many_pages: "370",
    },
  ],
};

const books = data.books;

function displayBooks(books) {
  const markup = bookTemplate({ books });
  document.getElementById("library").innerHTML = markup;
}

displayBooks(books);

document.getElementById("books-rolandDahl").addEventListener("click", () => {
  const searchedBooks = data.books.filter(
    ({ author }) => author === "Roald Dahl"
  );

  displayBooks(searchedBooks);
});

document.getElementById("books-alphabet").addEventListener("click", () => {
  const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

  displayBooks(sortedBooks);
});
