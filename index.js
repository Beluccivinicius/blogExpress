const express = require("express");
const app = express();
const cors = require("cors");
var path = require("path");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", require("./controllers/inicialPage.js"));

app.listen(5050, () => {
  console.log(`Server started on port 5050`);
});
