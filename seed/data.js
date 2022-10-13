import db from "../db/connection.js";
import mongoose from "mongoose";
import BookSchema from "../models/book.js";
import Author from "../models/author.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  let Book = mongoose.model("books", BookSchema);

  const book1 = new Book({
    title: "The Great Gatsby",
    type: "Fiction",
  });

  await book1.save();

  const book2 = new Book({
    title: "A Brief History of Time",
    type: "Non-Fiction",
  });

  await book2.save();

  const authors = [
    {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
      nationality: "United States",
      birthYear: 1896,
      books: [book1],
    },
    {
      firstName: "Stephen",
      lastName: "Hawking",
      nationality: "United States",
      birthYear: 1942,
      books: [book2],
    },
  ];

  await Author.insertMany(authors);
  console.log("Created authors!");

  // close database connection. done.
  db.close();
};

insertData();

