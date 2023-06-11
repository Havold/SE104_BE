import { Schema, model } from "mongoose";

const managerSchema = new Schema(
  {
    account: { type: String, required: true },
    password: { type: String, required: true },
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
  { collection: "manager" }
);
const ManagerModal = model("Manager", managerSchema);
export default ManagerModal;
