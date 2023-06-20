import { Schema, model } from "mongoose";

const registerContestForm = new Schema(
  {
    student_id: { type: String, required: true, ref: "StudentAccount" },
    exam_type: { type: String, enum: ["KHTN", "KHXH"] },
    preference_majors: [
      {
        type: {
          rank: { type: Number, required: true },
          school_name: { type: String, required: true },
          school_id: { type: String, required: true },
          majors_name: { type: String, required: true },
          majors_id: { type: String, required: true },
        },
        default: [],
        required: true,
      },
    ],
  },
  {
    collection: "register contest form",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const RegisterContestModal = model("RegisterContest", registerContestForm);

export default RegisterContestModal;
