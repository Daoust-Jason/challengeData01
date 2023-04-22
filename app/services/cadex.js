const parts = require('../../data/parts.json');
const { getRandomValueFromArray } = require('../helpers/random');

const cadexService = {
  generate() {
    const name = getRandomValueFromArray(parts.names);
    const adjective = getRandomValueFromArray(parts.adjectives);
    const verb = getRandomValueFromArray(parts.verbs);
    const complement = getRandomValueFromArray(parts.complements);

    const cadexItem = {
      name: name,
      adjective: adjective,
      verb: verb,
      complement: complement
    }

    return cadexItem;
  },

  glue(cadexItem) {

    const gluedCadex = `${cadexItem.name} ${cadexItem.adjective} ${cadexItem.verb} ${cadexItem.complement}`;

    return gluedCadex;
  }
};


module.exports = cadexService;
