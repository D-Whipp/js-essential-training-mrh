const Book = {
  name: 'Take back your life',
  author: 'Levi Lusko',
  length: 275,
  currentPage: 0,
  turnPage: function () {
    left = currentPage + 1;
  },
};

console.log(Book);
console.log(Book.author);
console.log(Book.name);
console.log(Book.currentPage);
