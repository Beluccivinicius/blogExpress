const { faker } = require("@faker-js/faker");
const fakerBr = require("faker-br");

const createTheme = (...themes) => {
  const randomTheme = [
    "internet",
    "jogos",
    "noticia",
    "corporativo",
    "academia",
    "vida social",
    "trabalho",
    "educação",
    "mundo",
  ];

  const randomThemeToReturn = [];
  for (let i = 0; i < 3; i++) {
    let theme = Math.floor(Math.random() * 9);

    if (randomTheme.includes(theme)) {
      theme = Math.floor(Math.random() * 9);
    }

    randomThemeToReturn.push(randomTheme[theme]);
  }
  return randomThemeToReturn;
};

function createRandomPost() {
  const [theme1, theme2, theme3] = createTheme();

  return {
    id_post: faker.string.uuid(),
    titlePost: faker.lorem.sentence(),
    content: faker.lorem.sentences(),
    theme_one: theme1,
    theme_two: theme2,
    theme_three: theme3,
  };
}

function createRandomUser() {
  return {
    id_user: faker.string.uuid(),
    password: faker.internet.password(),
    name: faker.person.fullName(),
    mail: faker.internet.email(),
    cpf: fakerBr.br.cpf(),
    nickname: faker.internet.userName(),
    cell_phone: faker.phone.number(),
  };
}

module.exports = { createRandomUser, createRandomPost, createTheme };
