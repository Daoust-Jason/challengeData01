const parts = require('../../data/parts.json');
const { getRandomValueFromArray } = require('../helpers/random');

const cadexService = {
  generate() {
    const name = getRandomValueFromArray(parts.names);
    const adjective = getRandomValueFromArray(parts.adjectives);
    const verb = getRandomValueFromArray(parts.verbs);
    const complement = getRandomValueFromArray(parts.complements);

    return `${name} ${adjective} ${verb} ${complement}`;
  },
};

module.exports = cadexService;
