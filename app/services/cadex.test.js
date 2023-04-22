const cadexService = require('./cadex');

test('generate should return a string', () => {
  expect(typeof cadexService.generate()).toBe('object');
});
test('generate should return a not empty string', () => {
  expect(typeof cadexService.generate()).not.toBe('');
});
/* test('generate should return a string with at least 4 words', () => {
  expect(cadexService.generate().split(' ').length).toBeGreaterThanOrEqual(4);
}); */

test('generated object should have correct properties', () => {
  const cadexItem = cadexService.generate();
  expect(cadexItem).toHaveProperty('name');
  expect(cadexItem).toHaveProperty('adjective');
  expect(cadexItem).toHaveProperty('verb');
  expect(cadexItem).toHaveProperty('complement');
});

test('glue should return a string', () => {
  const cadexItem = cadexService.generate();
  expect(typeof cadexService.glue(cadexItem)).toBe('string');
});

test('glue should return a string with at least 4 words', () => {
  const cadexItem = cadexService.generate();
  const gluedCadex = cadexService.glue(cadexItem);
  expect(gluedCadex.split(' ').length).toBeGreaterThanOrEqual(4);
});
