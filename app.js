console.log("WebServerni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();


// const { render } = require("ejs");

// MongoDB connect
const db = require("./server").db();
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

app.post("/create-item", (req, res) => {
  // TODO: code with db here

});

app.get("/", function (req, res) {
  res.render("reja");
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
