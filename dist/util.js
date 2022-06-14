"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionToObj = exports.isSassException = exports.toCamelCase = exports.toDashCase = exports.getRelativePath = exports.isCSSModuleRequest = exports.isCSSRequest = exports.cssModuleReg = exports.cssLangReg = exports.cssLangs = void 0;
const path_1 = __importDefault(require("path"));
exports.cssLangs = `\\.(css|sass|scss)($|\\?)`;
exports.cssLangReg = new RegExp(exports.cssLangs);
exports.cssModuleReg = new RegExp(`\\.module${exports.cssLangs}`);
const isCSSRequest = (request) => exports.cssLangReg.test(request);
exports.isCSSRequest = isCSSRequest;
const isCSSModuleRequest = (request) => exports.cssModuleReg.test(request);
exports.isCSSModuleRequest = isCSSModuleRequest;
const getRelativePath = (from, to) => path_1.default.relative(path_1.default.dirname(from || ''), path_1.default.dirname(to || '')) || './';
exports.getRelativePath = getRelativePath;
const toDashCase = (target) => target
    .replace(/[-_ /~ . ][A-z0-9]/g, (v) => {
    return '-' + v.slice(1);
})
    .toLowerCase();
exports.toDashCase = toDashCase;
const toCamelCase = (target) => target
    .replace(/^[A-Z]/, (m) => m.toLowerCase())
    .replace(/[-_ ./~ ]+([A-z0-9])/g, (m, $1) => $1.toUpperCase());
exports.toCamelCase = toCamelCase;
const isSassException = (e) => 'file' in e;
exports.isSassException = isSassException;
const collectionToObj = (collection) => {
    return collection.reduce((acc, item) => {
        return { ...acc, ...item };
    }, {});
};
exports.collectionToObj = collectionToObj;