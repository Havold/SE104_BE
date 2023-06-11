import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import ManagerModal from "../../models/manager.model.js";

const access_token_key = process.env.MANAGER_ACCESS_TOKEN_KEY;

async function verifyToken(access_token) {
  try {
    const decodedToken = jwt.verify(access_token, access_token_key);
    const manager = await ManagerModal.findOne({
      _id: decodedToken.manager_id,
    });
    if (!manager)
      return Promise.reject({ status: 401, message: "Unauthorized" });
    this.Manager = manager;
    const indexToken = manager.tokens.findIndex(
      (ele) => ele.access_token === access_token
    );
    if (indexToken === -1)
      return Promise.reject({ status: 401, message: "Unauthorized" });
    this.access_token = access_token;
    this.indexToken = indexToken;
    return { manager: this.Manager, indexToken };
  } catch (err) {
    return Promise.reject({ status: 401, message: "Unauthorized" });
  }
}

export default verifyToken;
