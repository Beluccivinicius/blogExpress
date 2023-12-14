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
  //   save_posts: DataTypes.INTEGER, //normalizar esse item
});

const Posts = sequelize.define("post", {
  id_post: DataTypes.STRING,
  titlePost: DataTypes.STRING,
  content: DataTypes.TEXT,
  theme_one: { type: DataTypes.CHAR, defaultValue: null },
  theme_two: { type: DataTypes.CHAR, defaultValue: null },
  theme_three: { type: DataTypes.CHAR, defaultValue: null },
});

const Messages = sequelize.define("message", {
  coment: DataTypes.TEXT,
});

//Relação um para muitos Posts e Usuarios
Users.hasMany(Posts, {
  foreignKey: "id_user",
});

//Relação um User para muitos Messages
Users.hasMany(Messages, {
  foreignKey: "id_user",
});

//Relação um Post para muitas Messages
Posts.hasMany(Messages, {
  foreignKey: "id_post",
});

(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();

module.exports = { Users, Posts, Messages };
