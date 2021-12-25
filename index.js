const express = require("express");
const app = express();
const path = require("path");
const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const db = require("./config/db");

app.use(express.json()); // Express receive - post json

// Mock data

const products = [
  {
    id: "1",
    name: "Node.js For Beginner",
    category: "Node",
    price: 990,
  },
  {
    id: "2",
    name: "React 101",
    category: "React",
    price: 200,
  },
  {
    id: "3",
    name: "Node.js For Expert",
    category: "Node",
    price: 5500,
  },
  {
    id: "4",
    name: "Getting started with MongoDB",
    category: "MongoDB",
    price: 4000,
  },
];

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.post("/products", (req, res) => {
  const payload = req.body;
  res.json(payload);
});

app.put("/products/put/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.delete("/products/delete/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use("/api/book", require("./api/book"));

app.listen(PORT, HOST, () => {
  console.log("Server is running on port :", PORT);
});
