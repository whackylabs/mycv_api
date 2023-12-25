import { Request, Response, NextFunction } from "express";

import * as cryptor from "../misc/cryptor";

export default async function authorize(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.sendStatus(403);
    }

    const comps = authorization.split(" ");
    if (comps.length < 2 || comps[0] !== "Bearer") {
        return res.sendStatus(403);
    }

    try {
        req.userId = await cryptor.jwtTokenGetUserId(comps[1]);
        next();
    } catch (error) {
        next(error);
    }
}
