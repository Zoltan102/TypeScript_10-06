import { Book } from "./Book";

let books = new Map();
for ( let i = 0; i < 30; i++){
    books.set(i, new Book("Book #" + i, Math.floor(Math.random() * (10 - 1) + 1)));
}
for (let i = 0; i < books.size; i++){
    console.log(books.get(i).toString())
}