const express = require("express");
const router = express.Router();
const {
  createRandomUser,
  createRandomPost,
  createTheme,
  createMessages,
} = require("../utils/generateFaker");

router.post("/", async (req, res) => {
  const { nome, mail, cpf, foto, nickname, cellPhone, senha } = req.body;

  console.log(req.body);
});

module.exports = router;
