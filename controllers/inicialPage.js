const express = require("express");
const router = express.Router();
const {
  createRandomUser,
  createRandomPost,
  createTheme,
  createMessages,
} = require("../utils/generateFaker");

//MY USER
// {"id":6,
// "id_user":"c258d6f9-7fc2-463b-ba2d-0d0c936368c4",
// "password":"75o4xcByGy5ZfbF"
// ,"name":"Philip Kuphal"
// ,"mail":"Sigmund6@gmail.com",
// "cpf":"13442164559",
// "nickname":"Mazie91",
// "cell_phone":"247.232.0711",
// "createdAt":"2024-02-21T21:36:36.000Z",
// "updatedAt":"2024-02-21T21:36:36.000Z"}

const { Users, Posts, Messages, Save } = require("../model/aplication");

router.get("/", async (req, res) => {
  const allPosts = await Posts.findAll();
  res.send(allPosts);
});

router.get("/save/:idPost", async (req, res) => {
  const { idPost } = req.params;

  //Dar um jeito de mandar o id_user na requisição
  const idUser = 6;

  const listSave = await Save.findOne({
    where: { id_user: idUser, id_post: idPost },
  });

  listSave == null
    ? await Save.create({
        id_user: 6,
        id_post: idPost,
      })
    : await listSave.destroy();
});

router.get("/user", async (req, res) => {
  const user = await Users.findOne({ where: { id: 1 } });

  res.send(user);
});

router.get("/messages/:id", async (req, res) => {
  const { id } = req.params;
  const messages = await Messages.findAll({ where: { id_post: id } });

  res.send(messages);
});

module.exports = router;
