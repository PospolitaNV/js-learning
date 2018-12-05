const getRandomizer = require('./random');

test('Different numbers with different seeds', () => {
  const randomizer = getRandomizer(1);
  const randomizer2 = getRandomizer(2);
  expect(randomizer.nextInt()).not.toEqual(randomizer2.nextInt());
  expect(randomizer.nextDouble()).not.toEqual(randomizer2.nextDouble());
});

test('Equal seed return equal numbers', () => {
  const randomizer = getRandomizer(1);
  const randomizer2 = getRandomizer(1);
  expect(randomizer.nextInt()).toEqual(randomizer2.nextInt());
  expect(randomizer.nextDouble()).toEqual(randomizer2.nextDouble());
});
