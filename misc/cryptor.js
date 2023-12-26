"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTokenGetUserId = exports.jwtTokenCreate = exports.pwdHashIsValid = exports.pwdHashCreate = exports.pwdCreate = exports.salt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const constants = __importStar(require("./constants"));
function salt() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.genSalt(constants.kCryptSalt);
    });
}
exports.salt = salt;
function pwdCreate() {
    return crypto_1.default.randomBytes(32).toString('hex');
}
exports.pwdCreate = pwdCreate;
function pwdHashCreate(password, salt) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.hash(password, salt);
    });
}
exports.pwdHashCreate = pwdHashCreate;
function pwdHashIsValid(hash, password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(password, hash);
    });
}
exports.pwdHashIsValid = pwdHashIsValid;
function jwtTokenCreate(userId) {
    return jsonwebtoken_1.default.sign({ userId }, constants.kJWTSecret, { expiresIn: "30d" });
}
exports.jwtTokenCreate = jwtTokenCreate;
;
function jwtTokenGetUserId(token) {
    const payload = jsonwebtoken_1.default.verify(token, constants.kJWTSecret);
    return payload.userId;
}
exports.jwtTokenGetUserId = jwtTokenGetUserId;
//# sourceMappingURL=cryptor.js.map