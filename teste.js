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
    const theme = Math.floor(Math.random() * 9);

    randomThemeToReturn.push(randomTheme[theme]);
  }

  console.log(randomThemeToReturn);
  return;
};

createTheme();
