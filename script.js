// Challenge
// Create new object type named "Book"
// Add  series of these objects
// add at least 1 property and 1 method
// Choices:
// 1. use Class 2. object contructor function, or 3. individual objects
// Add at least five book objects
class Book {
  constructor(name, author, price, length, publisher) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.len = length;
    this.publisher = publisher;
  }
  displayName() {
    console.log('Title: ', this.name);
  }
  displayAuthor() {
    console.log('Author: ', this.author);
  }
  displayPrice() {
    console.log('Price: $', this.price);
  }
  displaySize() {
    if (this.len > 1000) {
      console.log(this.name + ' is a large book!');
    } else if (this.len > 500) {
      console.log(this.name + ' is a medium sized book.');
    } else {
      console.log(this.name + ' is a short story.');
    }
  }
  displayPublisher() {
    console.log('Publisher: ', this.publisher);
  }
}

let Bible = new Book(
  'The Holy Bible',
  'God',
  17.99,
  1360,
  'Fingerprint Publishing'
);
let TheShadowOfWhatWasLost = new Book(
  'The Shadow of What Was Lost',
  'James Islington',
  12.69,
  604,
  'Knopf Books'
);
let TheHobbit = new Book(
  'The Hobbit',
  'JRR Tolkien',
  43.83,
  322,
  'William Morrow'
);
let FireAndBlood = new Book(
  'Fire and Blood',
  'George R. R. Martin',
  13.99,
  752,
  'Bantam'
);
let TheHungerOfTheGods = new Book(
  'The Hunger of the Gods',
  'John Gwynne',
  15.99,
  672,
  'Orbit'
);

console.log(Bible.displaySize());
console.log(TheShadowOfWhatWasLost.displaySize());
