"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const resume_1 = require("../models/resume");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.sendStatus(400);
        }
        let resumes = yield resume_1.Resume.find({ userId });
        if (!resumes) {
            return res.sendStatus(400);
        }
        return res
            .status(200)
            .json(resumes.map(resume => resume._id))
            .end();
    }
    catch (error) {
        next(error);
    }
}));
exports.router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { title, } = req.body;
        if (!userId || !title) {
            return res.sendStatus(400);
        }
        const resume = new resume_1.Resume({ userId, title, });
        yield resume.save();
        return res
            .status(201)
            .json(resume.toObject())
            .end();
    }
    catch (error) {
        next(error);
    }
}));
exports.router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const values = req.body;
        if (!id || !values) {
            return res.sendStatus(400);
        }
        yield resume_1.Resume.findByIdAndUpdate(id, values);
        const resume = yield resume_1.Resume.findById(id);
        if (!resume) {
            return res.sendStatus(400);
        }
        return res
            .status(200)
            .json(resume.toObject())
            .end();
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=mycv_path.js.map