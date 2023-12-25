import dotenv from "dotenv";

dotenv.config();

export const kPort = Number(process.env.kPort);
export const kCryptSalt = Number(process.env.kCryptSalt);
export const kDBHost = process.env.kDBHost as string;
export const kHost = process.env.kHost as string;
export const kJWTSecret = process.env.kJWTSecret as string;
export const kSupportEmail = "support@mycv.com"

export function url() {
    return `${kHost}:${kPort}`
}
