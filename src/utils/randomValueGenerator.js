"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
/*Code source https://github.com/afferenslucem/essents/blob/master/src/utils/random.ts*/
const MULTIPLIER = 1000000000;
const RANDOM_LIMIT = 1000000;
class Random {
    constructor() {
        this.seed = 0;
        this.seed = Date.now() % 100000;
    }
    static random() {
        return Math.floor(Math.random() * MULTIPLIER);
    }
    /**
     * returns random value
     * @param max - upper bound of random value
     * @returns integer value [0 ... max - 1]
     */
    next(max = RANDOM_LIMIT) {
        return (Random.random() + this.seed) % max;
    }
}
exports.Random = Random;
