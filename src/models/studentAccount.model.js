import { Schema, model } from "mongoose";

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
    tokens: [
      {
        access_token: {
          type: String,
          required: true,
        },
        refresh_token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    collection: "student account",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
const StudentAccountModal = model("StudentAccount", StudentAccountSchema);
export default StudentAccountModal;
