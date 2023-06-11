import jwt from "jsonwebtoken";
import {} from "dotenv/config";

const access_token_key = process.env.MANAGER_ACCESS_TOKEN_KEY;
const access_token_expires_time = process.env.ACCESS_TOKEN_EXPIRES_TIME;
const refresh_token_key = process.env.MANAGER_REFRESH_TOKEN_KEY;
const refresh_token_expires_time = process.env.REFRESH_TOKEN_EXPIRES_TIME;

async function createRefreshToken() {
  if (!this.Manager)
    return Promise.reject({ status: 401, message: "Unauthorized" });
  const access_token = jwt.sign(
    { manager_id: this.Manager._id },
    access_token_key,
    {
      expiresIn: access_token_expires_time,
    }
  );
  const refresh_token = jwt.sign(
    { manager_id: this.Manager._id },
    refresh_token_key,
    {
      expiresIn: refresh_token_expires_time,
    }
  );
  this.Manager.tokens = this.Manager.tokens.concat({
    access_token,
    refresh_token,
  });
  await this.Manager.save();
  return { access_token, refresh_token };
}

export default createRefreshToken;
