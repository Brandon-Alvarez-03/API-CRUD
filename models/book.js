import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String },
  type: { type: String },
});

export default BookSchema;
