import login from "./login.js";
import verifyToken from "./verifyToken.js";
import createAccessToken from "./createAccessToken.js";
import createRefreshToken from "./createRefreshToken.js";
import logout from "./logout.js";
import register from "./register.js";
import addStudentExamInfo from "./addStudentExamInfo.js";

function ManagerService(Manager) {
  this.Manager = Manager;
  this.login = login;
  this.register = register;
  this.verifyToken = verifyToken;
  this.createRefreshToken = createRefreshToken;
  this.createAccessToken = createAccessToken;
  this.logout = logout;
  this.addStudentExamInfo = addStudentExamInfo;
}

export default ManagerService;
