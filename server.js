console.log("WebServerni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

// const { render } = require("ejs");

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});
// 1.kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //html form
// console.log(typeof express);
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
const server = http.createServer(app);
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get('/',function(req,res){
    res.render("harid")
})
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server 3000 Portda Muvafaqiyyatli ishlayapti:${PORT}`);
});
