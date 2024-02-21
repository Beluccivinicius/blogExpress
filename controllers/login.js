const express = require("express");
const router = express.Router();

const { Users, Posts, Messages } = require("../model/aplication");

router.post("/", async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await Users.findOne({ where: { mail } });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
