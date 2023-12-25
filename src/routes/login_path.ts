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

        const user = await User.findOne({ email });
        if (!user) {
            return res.sendStatus(400);
        }

        const isGood = await cryptor.pwdHashIsValid(user.hash, password);
        if (!isGood) {
            return res.sendStatus(403);
        }

        return res
            .status(200)
            .json({
                id: user._id,
                email: user.email,
                token: cryptor.jwtTokenCreate(user._id.toString()),
            })
            .end();
    } catch (error) {
        next(error);
    }
});