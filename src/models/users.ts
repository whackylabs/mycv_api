import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true },
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);
