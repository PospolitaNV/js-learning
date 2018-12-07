const getHasher = require('./hasher');

test('Save message, return hashed id, get message by hashed id', () => {
  let hasher = getHasher();
  let text = "bla-bla";
  let hash = hasher.newMessage(text);
  expect(text).toEqual(hasher.getMessage(hash));

  console.log(hash);
  console.log(hasher.getMessage(hash));
});
