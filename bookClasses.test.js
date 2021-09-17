const Book = require("./Book");
const Author = require("./Author");

test("Book sets title", () =>{
    const JK = new Author("J.K Rowling", 1969);
    const HP = new Book("Harry Potter", JK, 1);
    expect(HP.title).toBe("Harry Potter");
})

test("Author sets name", () =>{
    const JK = new Author("J.K Rowling", 1969);
    expect(JK.name).toBe("J.K Rowling")
})