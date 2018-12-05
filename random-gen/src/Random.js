module.exports = function getRandomizer(seed) {

    let generatorContext = {
        seed: seed,
        multiplier: 0x5DEECE66D,
        addend: 0xB,
        mask: (1 << 26) - 1,
        double_unit: 1.0 / (1 << 26),
        __next(bits) {
            generatorContext.seed = (generatorContext.seed * generatorContext.multiplier + generatorContext.addend)
                & generatorContext.mask;
            return generatorContext.seed >>> (26 - bits);
        }
    };

    generatorContext.seed = (seed ^ generatorContext.multiplier) & generatorContext.mask;

    return {
        nextInt() {
            return generatorContext.__next();
        },
        nextDouble() {
            return generatorContext.__next(26) * generatorContext.double_unit;
        }
    };

};


