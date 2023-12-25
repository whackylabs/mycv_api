import { Router, Request, Response, NextFunction } from "express";

import { User } from "../models/users";
import * as cryptor from "../misc/cryptor";

export const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }

        if (await User.exists({ email })) {
            return res.status(400).json({
                message: `A user with ${email} already exists`
            }).end();
        }

        const salt = await cryptor.salt();
        const hash = await cryptor.pwdHashCreate(password, salt);
        const user = new User({ email, hash, salt });
        await user.save();

        return res
            .status(201)
            .json({ id: user._id, email, })
            .end();
    } catch (error) {
        next(error);
    }
});
