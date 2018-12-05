const getRandomizer = require("./Random");

let randomizer = getRandomizer(123);
console.log(randomizer.nextDouble());
console.log(randomizer.nextDouble());
console.log(randomizer.nextDouble());
console.log(randomizer.nextDouble());

console.log("_______________ AGAIN INIT WITH THIS SEED ______________");

let randomizer2 = getRandomizer(123);
console.log(randomizer2.nextDouble());
console.log(randomizer2.nextDouble());
console.log(randomizer2.nextDouble());
console.log(randomizer2.nextDouble());