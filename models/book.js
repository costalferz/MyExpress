const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: { type: String, required: true },
  owner_name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, default: "" },
  timestamp: { type: Date },
});

module.exports = mongoose.model("Book", BookSchema);
