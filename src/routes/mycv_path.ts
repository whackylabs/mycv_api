import { Router, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import { Resume } from "../models/resume";

export const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.sendStatus(400);
        }
        let resumes = await Resume.find({ userId });
        if (!resumes) {
            return res.sendStatus(400);
        }

        return res
            .status(200)
            .json(resumes.map(resume => resume._id))
            .end();
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        const { title, } = req.body;
        if (!userId || !title) {
            return res.sendStatus(400);
        }

        const resume = new Resume({ userId, title, });
        await resume.save();

        return res
            .status(201)
            .json(resume.toObject())
            .end();
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const values = req.body as Record<string, any>;
        if (!id || !values) {
            return res.sendStatus(400);
        }

        await Resume.findByIdAndUpdate(id, values);
        const resume = await Resume.findById(id);
        if (!resume) {
            return res.sendStatus(400);
        }

        return res
            .status(200)
            .json(resume.toObject())
            .end();
    } catch (error) {
        next(error);
    }
});
