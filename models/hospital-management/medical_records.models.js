import mongoose from "mongoose";

const medical_recordSchema = new mongoose.Schema({}, { timestamps: true });

export const Medical_Record = mongoose.model("Medical_Record", medical_recordSchema)