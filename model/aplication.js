const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mysql", "root", "Teco@1406", {
  host: "localhost",
  logging: false,
  dialect: "mariadb",
});

const Users = sequelize.define("user", {
  id_user: DataTypes.UUID,
  password: DataTypes.CHAR,
  name: DataTypes.TEXT,
  mail: DataTypes.TEXT,
  cpf: DataTypes.CHAR,
  nickname: { type: DataTypes.TEXT, defaultValue: this.name },
  cell_phone: DataTypes.CHAR,
});

const Posts = sequelize.define("post", {
  id_post: DataTypes.STRING,
  title_post: DataTypes.TEXT,
  content: DataTypes.TEXT,
  theme_one: { type: DataTypes.CHAR, defaultValue: null },
  theme_two: { type: DataTypes.CHAR, defaultValue: null },
  theme_three: { type: DataTypes.CHAR, defaultValue: null },
});

const Save = sequelize.define("save", {
  id_user: DataTypes.STRING,
});

const Messages = sequelize.define("message", {
  comment: DataTypes.TEXT,
  author: DataTypes.STRING,
  likes: DataTypes.INTEGER,
});

//Relação um para muitos Posts e Usuarios
Users.hasMany(Posts, {
  constraints: true,
  foreignKey: "id_user",
});

//Relação um Save para muitos Posts
Posts.hasMany(Save, {
  constraints: true,
  foreignKey: "id_post",
});

//Relação um User para muitos Messages
Users.hasMany(Messages, {
  constraints: true,
  foreignKey: "id_user",
});

//Relação um Post para muitas Messages
Posts.hasMany(Messages, {
  constraints: true,
  foreignKey: "id_post",
});

(async () => {
  await sequelize.sync({ force: false });

  // Code here
})();

module.exports = { Users, Posts, Messages, Save };
