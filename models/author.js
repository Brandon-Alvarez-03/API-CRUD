import mongoose from "mongoose";
import Book from "../models/book.js";
const Schema = mongoose.Schema;

const Author = new Schema(
  {
    firstName: {type: String},
    lastName: {type: String},
    nationality: {type: String},
    birthYear: {type: Number},
    books: [Book],
  },
  { timestamps: true }
);

export default mongoose.model("authors", Author);
