import { Schema, model } from "mongoose";

const registerContestForm = new Schema(
  {
    graduated_year: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    place_of_birth: { type: String, required: true },
    priority_area: {
      type: String,
      enum: ["KV1", "KV2", "KV2-NT", "KV3"],
      required: true,
    },
    priority_object: { type: String, enum: ["UT1", "UT2"], required: true },

    birth: {
      type: Date,
      required: true,
    },
    sex: {
      type: Boolean,
      required: true,
    },
    household: {
      type: {
        phone: { type: String },
        province: { type: String },
        district: { type: String },
        commune: { type: String },
        house_number: { type: String },
      },
      required: true,
    },
    contact: {
      type: {
        phone: { type: String },
        province: { type: String },
        district: { type: String },
        commune: { type: String },
        house_number: { type: String },
      },
      required: true,
    },
    student_id: { type: String, required: true },
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
