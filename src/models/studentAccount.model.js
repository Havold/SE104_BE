import mongoose, { Schema, model } from "mongoose";

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
    CCCD_detail: {
      type: {
        date_provide: {
          type: Date,
        },
        provide_by: {
          type: String,
        },
        CCCD_image_front: { type: String },
        CCCD_image_backside: { type: String },
      },
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
    birth: {
      type: Date,
    },
    sex: {
      type: Boolean,
    },
    place_of_birth: { type: String },
    nationality: { type: String },
    nation: { type: String },
    religion: { type: String },
    contact_info: {
      type: {
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
      },
    },
    priority_info: {
      graduation_status: {
        type: String,
        enum: ["difference", "grade_12", "graduated"],
        required: true,
      },
      priority_area: { type: String, enum: ["KV1", "KV2", "KV2-NT", "KV3"] },
      priority_object: { type: String, enum: ["UT1", "UT2"] },
      graduated_year: { type: String },
      grade_10: {
        type: {
          province: { type: String },
          district: { type: String },
          school_name: { type: String },
        },
        required: true,
      },
      grade_11: {
        type: {
          province: { type: String },
          district: { type: String },
          school_name: { type: String },
        },
        required: true,
      },
      grade_12: {
        type: {
          province: { type: String },
          district: { type: String },
          school_name: { type: String },
        },
        required: true,
      },
    },
    register_contest_form: {
      type: mongoose.Types.ObjectId,
      ref: "RegisterContest",
      unique: true,
    },
  },
  {
    collection: "student account",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
const StudentAccountModal = model("StudentAccount", StudentAccountSchema);
export default StudentAccountModal;
