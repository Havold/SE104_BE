import { Schema, model } from "mongoose";

const registerContestForm = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birth: {
      type: Date,
      required: true,
    },
    sex: {
      type: Boolean,
      required: true,
    },
    CCCD: { type: String, required: true },
    CCCD_detail: {
      date_provide: {
        type: String,
        required: true,
      },
      provide_by: {
        type: String,
        required: true,
      },
    },
    household: { type: String, required: true },
    contact: { type: String, required: true },
    student_id: { type: String, required: true },
    exam_info: {
      exam_date: { type: String, required: true },
      exam_venue: { type: String, required: true },
      exam_room: { type: String, required: true },
    },

    fine: { type: Number, required: true, default: 0 },
  },
  {
    collection: "register contest form",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const registerContestModal = model("RegisterContest", registerContestForm);

export default registerContestModal;
