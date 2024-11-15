const express = require("express");
const router = express.Router();
const {
  createRandomUser,
  createRandomPost,
  createTheme,
  createMessages,
} = require("../utils/generateFaker");
const nodemailer = require("../utils/nodeMailer");
const { route } = require("./inicialPage");

router.post("/email", async (req, res) => {
  const { nome, email } = req.body;
  nodemailer(nome, email);
});

//Random Password
router.get("/", async (req, res) => {
  const { mail } = req.body;
  nodemailer(mail);
});

module.exports = router;
