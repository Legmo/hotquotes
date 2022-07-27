"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidGenerator = void 0;
/*Code source https://github.com/afferenslucem/essents/blob/master/src/utils/uuid-generator.ts*/
const randomValueGenerator_1 = require("./randomValueGenerator");
const sha1_1 = __importDefault(require("sha1"));
class UuidGenerator {
    constructor(first, second) {
        this.random = new randomValueGenerator_1.Random();
        this.staticData = '';
        this.version = '';
        this.variant = '';
        this.validN = ['8', '9', 'a', 'b'];
        if (first != null) {
            this.readFirstParam(first);
        }
        if (second) {
            this.staticData = this.convertStatic(second);
        }
        this.version = this.version || '4';
        this.staticData = this.staticData || this.defaultStatic();
        this.variant = this.getVariant();
    }
    /**
     * returns uuid
     */
    generate() {
        const date = this.getDateHEX().padStart(12, '0');
        const version = this.version.toString();
        const variant = this.variant.toString();
        const staticData = this.staticData;
        const random = this.generateStatic(6);
        return `${date.slice(0, 8)}-${date.slice(8, 12)}-${version}${random.slice(0, 3)}-${variant}${random.slice(3, 6)}-${staticData}`;
    }
    defaultStatic() {
        const data = Date.now().toString(16) + this.random.next().toString(16);
        return this.convertStatic(data);
    }
    readFirstParam(first) {
        if (typeof first == 'number') {
            this.version = this.toString(first);
        }
        else if (typeof first == 'string') {
            this.staticData = this.convertStatic(first);
        }
    }
    getVariant() {
        const chooseN = this.random.next(4);
        return this.validN[chooseN];
    }
    convertStatic(userStatic) {
        return this.getHashCode(userStatic);
    }
    generateStatic(length) {
        let staticData = '';
        for (let i = 0; i < length; i++) {
            const rand = this.random.next(16);
            staticData += this.toString(rand);
        }
        return staticData;
    }
    getDateHEX() {
        const date = new Date().getTime();
        return this.toString(date).replace('.', '');
    }
    getHashCode(str) {
        return (0, sha1_1.default)(str).slice(0, 12);
    }
    toString(number) {
        return number.toString(16);
    }
}
exports.UuidGenerator = UuidGenerator;
