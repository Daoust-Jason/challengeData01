const mainController = {
  getHomePage(_, response) {
    response.send('Salut les starship');
  },
};

module.exports = mainController;
