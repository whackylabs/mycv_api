"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/public/index.html"));
});
//# sourceMappingURL=root_path.js.map