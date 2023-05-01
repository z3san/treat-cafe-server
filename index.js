const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("treat cafe running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const _id = req.params.id;
  const selectedChefs = chefs.find((chef) => +chef.id === +_id);
  console.log(selectedChefs);
  res.send(selectedChefs);
});

app.listen(port, () => {
  console.log(`treat cafe running on port:  ${port}`);
});
