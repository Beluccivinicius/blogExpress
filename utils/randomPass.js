const RandomPass = () => {
  let randonPass = "";

  for (let i = 0; i < 5; i++) {
    randonPass += Math.random().toString(36).substring(2);
  }

  return randonPass.substring(0, 5);
};

module.exports = RandomPass;
