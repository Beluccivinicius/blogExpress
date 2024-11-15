const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

let options = {
  setHeaders: function (res, path, stat) {
    res.set({
      "x-timestamp": Date.now(),
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": ["GET", "POST", "OPTION"],
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    });
  },
};
const corsOptions = {
  origin: "http://localhost:3000",
  preflightContinue: true,
  optionSuccessStatus: 200,
};

app.options("*", cors());
app.use(cors(corsOptions));

app.use(express.static("public", options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./controllers/inicialPage.js"));
app.use("/login", require("./controllers/login.js"));
app.use("/cadastrar", require("./controllers/cadastrar.js"));

app.listen(5050, () => {
  console.log(`Server started on port 5050`);
});
