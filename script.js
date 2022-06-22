const Book = {
  name: 'Take back your life',
  author: 'Levi Lusko',
  length: 275,
  isOpen: false,
  currentPage: 1,
  toggleOpen: function (openStatus) {
    this.isOpen = openStatus;
  },
};

console.log(Book);
console.log(Book.author);
console.log(Book.name);
console.log(Book.currentPage);
