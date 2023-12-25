import { Router, Request, Response, NextFunction } from "express";

import { User } from "../models/users";
import * as cryptor from "../misc/cryptor";
import * as mailer from "../misc/mailer";

export const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.sendStatus(400);
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.sendStatus(400);
        }

        const password = cryptor.pwdCreate();
        user.salt = await cryptor.salt();
        user.hash = await cryptor.pwdHashCreate(password, user.salt);;
        await user.save();

        mailer.sendEmail(
            user.email,
            "Reset Password",
            "reset_password.handlebars",
            { password },
            (isGood: boolean) => {
                res.sendStatus(isGood ? 200 : 500);
            });
    } catch (error) {
        next(error);
    }
});
