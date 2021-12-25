const Book = require("../models/book");
const router = require("express").Router();

router.post("/createBook", async (req, res) => {
  const { name, owner_name, category, description } = req.body;

  const book = await Book.create({
    owner_name,
    name,
    category,
    description,
    timestamp: Date.now(),
  });

  res.status(200).json({ status: true, msg: "Created Post Success", book });
});

router.get("/getBook", async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ status: true, msg: "Get Post Success", books });
});
module.exports = router;
