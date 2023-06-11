import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import StudentAccountModal from "../../models/studentAccount.model.js";

const access_token_key = process.env.ACCESS_TOKEN_KEY;
const access_token_expires_time = process.env.ACCESS_TOKEN_EXPIRES_TIME;
const refresh_token_key = process.env.REFRESH_TOKEN_KEY;

async function createAccessToken(refresh_token) {
  const decodedToken = jwt.verify(refresh_token, refresh_token_key);
  const student = await StudentAccountModal.findOne({
    _id: decodedToken.student_id,
  });
  this.StudentAccount = student;
  if (!this.StudentAccount)
    return Promise.reject({ status: 401, message: "Unauthorized" });
  const indexToken = this.StudentAccount.tokens.findIndex(
    (ele) => ele.refresh_token === refresh_token
  );
  if (indexToken === -1)
    return Promise.reject({ status: 401, message: "Unauthorized" });
  const access_token = await jwt.sign(
    { student_id: decodedToken.student_id },
    access_token_key,
    {
      expiresIn: access_token_expires_time,
    }
  );
  this.StudentAccount.tokens[indexToken].access_token = access_token;
  await this.StudentAccount.save();
  return access_token;
}

export default createAccessToken;
