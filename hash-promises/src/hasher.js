/* eslint no-bitwise: "off" */
let randomstring = require("randomstring");

module.exports = function getHasher() {
  const context = {
    objectMap: {},
    hashMap: {},
    counter: 0,
    hash(id) {
      let hash = randomstring.generate();
      this.hashMap[hash] = id;
      return hash;
    },
    unhash(hash) {
      return this.hashMap[hash];
    }
  };


  return {
    newMessage(text) {
      let id = context.counter++;
      context.objectMap[id] = text;
      return context.hash(id);
    },
    getMessage(hash) {
      let id = context.unhash(hash);
      return context.objectMap[id];

    }
  };
};
