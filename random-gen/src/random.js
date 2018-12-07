/* eslint no-bitwise: "off" */

/**
 * This object is used to generate a stream of
 * pseudorandom numbers. The class uses a 26-bit seed, which is
 * modified using a linear congruential formula.
 * (See Donald Knuth, The Art of Computer Programming, Volume 2, Section 3.2.1.)
 */

module.exports = function getRandomizer(seed) {
  const context = {
    seed,
    multiplier: 0x5deece66d,
    addend: 0xb,
    mask: (1 << 26) - 1,
    double_unit: 1.0 / (1 << 26),
    nextSeed(bits) {
      context.seed =
        (context.seed * context.multiplier + context.addend) & context.mask;
      return context.seed >>> (26 - bits);
    }
  };

  context.seed = (seed ^ context.multiplier) & context.mask;

  return {
    nextInt() {
      return context.nextSeed();
    },
    nextDouble() {
      return context.nextSeed(26) * context.double_unit;
    }
  };
};
