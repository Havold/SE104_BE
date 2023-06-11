import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import StudentAccountModal from "../../models/studentAccount.model.js";

const access_token_key = process.env.ACCESS_TOKEN_KEY;

async function verifyToken(access_token) {
  try {
    const decodedToken = jwt.verify(access_token, access_token_key);
    const student = await StudentAccountModal.findOne({
      _id: decodedToken.student_id,
    });
    if (!student)
      return Promise.reject({ status: 401, message: "Unauthorized" });
    this.StudentAccount = student;
    const indexToken = student.tokens.findIndex(
      (ele) => ele.access_token === access_token
    );
    if (indexToken === -1)
      return Promise.reject({ status: 401, message: "Unauthorized" });
    this.access_token = access_token;
    this.indexToken = indexToken;
    return { student: this.StudentAccount, indexToken };
  } catch (err) {
    return Promise.reject({ status: 401, message: "Unauthorized" });
  }
}

export default verifyToken;
