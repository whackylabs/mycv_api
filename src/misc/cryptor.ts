import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as constants from "./constants"

export async function salt() {
    return await bcrypt.genSalt(constants.kCryptSalt);
}

export function pwdCreate() {
    return crypto.randomBytes(32).toString('hex');
}

export async function pwdHashCreate(password: string, salt: string) {
    return await bcrypt.hash(password, salt);
}

export async function pwdHashIsValid(hash: string, password: string) {
    return await bcrypt.compare(password, hash);
}

export function jwtTokenCreate(userId: string) {
    return jwt.sign({ userId }, constants.kJWTSecret, { expiresIn: "30d" });
};

interface JwtPayload {
    userId: string
}

export function jwtTokenGetUserId(token: string) {
    const payload = jwt.verify(token, constants.kJWTSecret) as JwtPayload;
    return payload.userId;
}