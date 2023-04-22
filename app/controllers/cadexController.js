const cadexService = require('../services/cadex');

const cadexController = {
  getCadex(_, response) {
    const cadex = cadexService.generate();
    response.send(cadex);
  },
};

module.exports = cadexController;
