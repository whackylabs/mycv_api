"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = exports.kSupportEmail = exports.kJWTSecret = exports.kHost = exports.kDBHost = exports.kCryptSalt = exports.kPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.kPort = Number(process.env.kPort);
exports.kCryptSalt = Number(process.env.kCryptSalt);
exports.kDBHost = process.env.kDBHost;
exports.kHost = process.env.kHost;
exports.kJWTSecret = process.env.kJWTSecret;
exports.kSupportEmail = "support@mycv.com";
function url() {
    return `${exports.kHost}:${exports.kPort}`;
}
exports.url = url;
//# sourceMappingURL=constants.js.map