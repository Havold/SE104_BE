import StudentAccountModal from "../../models/studentAccount.model.js";
import bcrypt from "bcrypt";

async function register({ email, password, name, CCCD }) {
  const existingUser = await StudentAccountModal.findOne({ email });
  if (existingUser)
    return Promise.reject({ status: 400, message: "Email already exists" });
  const student = new StudentAccountModal({
    email,
    name,
    CCCD,
    password: await bcrypt.hash(password || "12345678", 10),
  });
  await student.save();
  this.StudentAccount = student;
  return true;
}

export default register;
