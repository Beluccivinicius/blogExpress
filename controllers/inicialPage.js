const express = require("express");
const router = express.Router();
const {
  createRandomUser,
  createRandomPost,
  createTheme,
} = require("../utils/generateFaker");

const { Users, Posts, Messages } = require("../model/aplication");

router.get("/", async (req, res) => {
  const user = new Users();
  // const tchau = await Posts.create(createRandomPost());
  const oi = await Posts.findAll();
  res
    .set({
      "Access-Control-Allow-Origin": "http://localhost:3000",
      //SÓ PARA SABER
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    })
    .send(oi);
});

module.exports = router;
