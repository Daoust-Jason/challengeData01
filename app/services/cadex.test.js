const cadexService = require('./cadex');

test('generate should return a string', () => {
  expect(typeof cadexService.generate()).toBe('string');
});
test('generate should return a not empty string', () => {
  expect(typeof cadexService.generate()).not.toBe('');
});
test('generate should return a string with at least 4 words', () => {
  expect(cadexService.generate().split(' ').length).toBeGreaterThanOrEqual(4);
});
