class Book {
    constructor(title, author, latestEdition = 1){
        this.title = title;
        this.author = author.name;
        this.latestEdition = latestEdition;
    }

    newEdition(){
        this.latestEdition++;
    }
}

class Author {
    constructor(name, yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
}

console.log("Running - bookClasses.js");

let JK = new Author("J.K Rowling", 1965);

let HarryPotter = new Book("Harry Potter", JK, "4");

console.log(HarryPotter);

HarryPotter.newEdition();

console.log(HarryPotter.latestEdition);

