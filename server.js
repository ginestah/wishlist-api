const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.listen(PORT, () => {
  console.log(`Hucks Express Server is listening on port ${PORT}`);
});

const items = [
  {
    name: "Apple Ipad Mini",
    description: "waiting for the next one to release",
  },
  {
    name: "Vespa Scooter",
    description: "this will be good for cruising NYC",
  },
  {
    name: "Shake Shack Milkshake",
    description: "nothing beats chocolate",
  },
  {
    name: "12oz Stumptown Coffee",
    description: "coffee that gets you wired",
  },
];

app.get("/", (req, resp) => {
  resp.json("you have made it to my api root!");
});

app.get("/items", (req, resp) => {
  resp.json(items);
});

app.get("/items/:id", (req, resp) => {
  const id = req.params.id;
  const item = posts.find((post) => item.id === id);
  resp.json(item);
});

app.post("/items", (req, resp) => {
  const item = req.body;
  items.push(item);
  resp.json("you have succesfully added a new post");
});

app.put("/items/:id", (req, resp) => {
  const id = req.params.id;
  const itemIndex = items.findIndex((item) => item.id === id);
  const item = { ...items[itemIndex], ...req.body };
  posts.splice(postIndex, 1, item);
  resp.json(item);
});
