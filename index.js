const express = require("express");
const app = express();
const cors = require("cors");
var path = require("path");

let options = {
  setHeaders: function (res, path, stat) {
    res.set({
      "x-timestamp": Date.now(),
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      //SÓ PARA SABER
      // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    });
  },
};

app.use(express.static("public", options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", require("./controllers/inicialPage.js"));
app.use("/login", require("./controllers/login.js"));

app.listen(5050, () => {
  console.log(`Server started on port 5050`);
});
