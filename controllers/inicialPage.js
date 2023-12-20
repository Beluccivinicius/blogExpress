const express = require("express");
const router = express.Router();
const {
  createRandomUser,
  createRandomPost,
  createTheme,
} = require("../utils/generateFaker");

const { Users, Posts, Messages } = require("../model/aplication");

router.get("/", async (req, res) => {
  // const tchau = await Posts.create(createRandomPost());
  const allPosts = await Posts.findAll();
  res
    .set({
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      //SÓ PARA SABER
      // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    })
    .send(allPosts);
});

router.get("/user", async (req, res) => {
  // const oneUser = await Users.create(createRandomUser());
  console.log(await Users.findAll());
  const user = await Users.findOne({ where: { cpf: "33438447304" } });

  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
  });
  res.send(user);
});

module.exports = router;
