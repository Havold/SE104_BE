import mongoose, { Schema, model } from "mongoose";
import validator from "validator";
import dayjs from "dayjs";
import {} from "dotenv/config";

const StudentAccountSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    CCCD: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "student account",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
const StudentAccountModal = model("StudentAccount", StudentSchema);
export default StudentAccountModal;
