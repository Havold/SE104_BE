import bcrypt from "bcrypt";
import ManagerModal from "../../models/manager.model.js";

async function login(account, password) {
  console.log("here");
  const manager = await ManagerModal.findOne({ account });
  if (!manager)
    return Promise.reject({
      status: 401,
      message: "Account or password not correct",
    });
  const isPasswordMatch = await bcrypt.compare(password, manager.password);
  if (!isPasswordMatch)
    return Promise.reject({
      status: 401,
      message: "Account or password not correct",
    });
  this.Manager = manager;
  return await this.createRefreshToken();
}

export default login;
