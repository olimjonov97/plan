console.log("WebServerni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// const { render } = require("ejs");

// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");
// 1.kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //html form

// 2.sesssion bogliq express
// 3.express uchun bss backend server side videw codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4. routing
// app.get("/hello", function (req, res) {
//   res.end("<h1>Hello World by  Arorkon</h1>");
// });
// app.get("/gift", function (req, res) {
//   res.end("<h1>siz sovgalar sahifasidasiz</h1>");
// });
//app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });
app.post("/create-item", (req, res) => {
  // TODO: code with db here
  // console.log(req.body);
  console.log("user entered /create");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // console.log(data.ops);
    res.json(data.ops[0]);
  });
});
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        // console.log(err);
        res.end("something went wrong");
      } else {
        // console.log(data)
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
