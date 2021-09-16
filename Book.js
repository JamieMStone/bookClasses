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

module.exports = Book;