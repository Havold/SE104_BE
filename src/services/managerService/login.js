import bcrypt from "bcrypt";
import ManagerModal from "../../models/manager.model.js";

async function login(account, password) {
  const manager = await ManagerModal.findOne({ account });
  if (!account)
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
