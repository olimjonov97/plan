const { log } = require("console");
const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://AbrorkhonDev:<db_password>@cluster0.5csby.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB", err);
    } else {
      console.log("MongoDB connection succeed ");
      module.exports = client;
      //   console.log(client.db)
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `Server 3000 Portda Muvafaqiyyatli ishlayapti:${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
//mongodb+srv://AbrorkhonDev:<db_password>@cluster0.5csby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
