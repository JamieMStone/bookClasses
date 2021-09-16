const Author = require("./Author");
const Book = require("./Book");

console.log("Running - bookClasses.js");

let JK = new Author("J.K Rowling", 1965);

let HarryPotter = new Book("Harry Potter", JK, "4");

console.log(HarryPotter);

HarryPotter.newEdition();

console.log(HarryPotter.latestEdition);

