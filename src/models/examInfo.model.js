import { Schema, model } from "mongoose";

const examInfoSchema = new Schema(
  {
    student_id: { type: String, required: true, ref: "StudentAccount" },
    exam_date: { type: String, required: true },
    exam_venue: { type: String, required: true },
    exam_room: { type: String, required: true },
    point_list: { type: Array },
    pass_list: { type: Array },
  },
  {
    collection: "exam info",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const ExamInfoModal = model("ExamInfo", examInfoSchema);

export default ExamInfoModal;
