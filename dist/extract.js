"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractClassNameKeys = void 0;
const util_1 = require("./util");
const importRe = new RegExp(/^(@import)/g);
const keySeparatorRe = new RegExp(/(?=[\s.:[\]><+,()])/g);
const extractClassNameKeys = (obj, toParseCase, any = false) => {
    return Object.entries(obj).reduce((curr, [key, value]) => {
        if (importRe.test(key))
            return curr;
        const splitKeys = key.split(keySeparatorRe);
        for (const splitKey of splitKeys) {
            if (any || splitKey.startsWith('.')) {
                if (toParseCase) {
                    curr.set(toParseCase(splitKey.replace('.', '').trim()), true);
                }
                else {
                    curr.set(splitKey.replace('.', '').trim(), true);
                }
            }
        }
        if (typeof value === 'object' && Object.keys(value).length > 0) {
            const valueToExtract = Array.isArray(value)
                ? (0, util_1.collectionToObj)(value)
                : value;
            const map = (0, exports.extractClassNameKeys)(valueToExtract, toParseCase, key === ':export');
            for (const key of map.keys()) {
                if (toParseCase) {
                    curr.set(toParseCase(key), true);
                }
                else {
                    curr.set(key, true);
                }
            }
        }
        return curr;
    }, new Map());
};
exports.extractClassNameKeys = extractClassNameKeys;
