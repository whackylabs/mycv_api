import mongoose, { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    desc: { type: String },
}, { timestamps: true });

const SectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    items: [ItemSchema],
}, { timestamps: true });

const ContactSchema = new mongoose.Schema({
    email: String,
    phone: String,
    website: String,
    location: String,
});

const ResumeSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    title: { type: String, required: true },
    subtitle: { type: String },
    contact: ContactSchema,
    sections: [SectionSchema],
}, { timestamps: true });

export const Resume = mongoose.model("Resume", ResumeSchema);
