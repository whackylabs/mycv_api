"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true },
}, { timestamps: true });
exports.User = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=users.js.map