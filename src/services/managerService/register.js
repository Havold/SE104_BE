import ManagerModal from "../../models/manager.model.js";
import bcrypt from "bcrypt";
import {} from "dotenv/config";

async function register({ account, password }, confirm_code) {
  if (confirm_code !== process.env.MANAGER_REGISTER_CODE)
    return Promise.reject({
      status: 400,
      message: "Code register is not valid",
    });
  const existingUser = await ManagerModal.findOne({ account });
  if (existingUser)
    return Promise.reject({ status: 400, message: "Account exits" });
  const manager = new ManagerModal({
    account,
    password: await bcrypt.hash(password || "12345678", 10),
  });
  await manager.save();
  this.Manager = manager;
  return true;
}

export default register;
