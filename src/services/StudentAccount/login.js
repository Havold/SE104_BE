import bcrypt from "bcrypt";
import StudentAccountModal from "../../models/studentAccount.model.js";

async function login(email, password) {
  const student = await StudentAccountModal.findOne({ email });
  if (!student)
    return Promise.reject({
      status: 401,
      message: "Email or password not correct",
    });
  const isPasswordMatch = await bcrypt.compare(password, student.password);
  if (!isPasswordMatch)
    return Promise.reject({
      status: 401,
      message: "Email or password not correct",
    });
  this.StudentAccount = student;
  return await this.createRefreshToken();
}

export default login;
