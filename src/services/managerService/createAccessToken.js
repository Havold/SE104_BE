import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import ManagerModal from "../../models/manager.model.js";

const access_token_key = process.env.MANAGER_ACCESS_TOKEN_KEY;
const access_token_expires_time = process.env.ACCESS_TOKEN_EXPIRES_TIME;
const refresh_token_key = process.env.MANAGER_REFRESH_TOKEN_KEY;

async function createAccessToken(refresh_token) {
  console.log("create", refresh_token);
  const decodedToken = jwt.verify(refresh_token, refresh_token_key);
  const manager = await ManagerModal.findOne({
    _id: decodedToken.manager_id,
  });
  this.Manager = manager;
  if (!this.Manager)
    return Promise.reject({ status: 401, message: "Unauthorized" });
  const indexToken = this.Manager.tokens.findIndex(
    (ele) => ele.refresh_token === refresh_token
  );
  if (indexToken === -1)
    return Promise.reject({ status: 401, message: "Unauthorized" });
  const access_token = await jwt.sign(
    { manager_id: decodedToken.manager_id },
    access_token_key,
    {
      expiresIn: access_token_expires_time,
    }
  );
  this.Manager.tokens[indexToken].access_token = access_token;
  await this.Manager.save();
  return access_token;
}

export default createAccessToken;
