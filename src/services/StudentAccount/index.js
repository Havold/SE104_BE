import createAccessToken from "./createAccessToken.js";
import createRefreshToken from "./createRefreshToken.js";
import login from "./login.js";
import logout from "./logout.js";
import register from "./register.js";
import verifyToken from "./verifyToken.js";

function StudentAccountService(StudentAccount) {
  this.StudentAccount = StudentAccount;
  this.register = register;
  this.login = login;
  this.logout = logout;
  this.verifyToken = verifyToken;
  this.createRefreshToken = createRefreshToken;
  this.createAccessToken = createAccessToken;
}

export default StudentAccountService;