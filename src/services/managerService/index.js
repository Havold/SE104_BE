import login from "./login.js";
import verifyToken from "./verifyToken.js";
import createAccessToken from "./createAccessToken.js";
import createRefreshToken from "./createRefreshToken.js";
import logout from "./logout.js";
import register from "./register.js";
import addStudentExamInfo from "./addStudentExamInfo.js";
import addPointInfo from "./addPointInfo.js";
import getUserRegister from "./getUserRegister.js";

function ManagerService(Manager) {
  this.Manager = Manager;
  this.login = login;
  this.register = register;
  this.verifyToken = verifyToken;
  this.createRefreshToken = createRefreshToken;
  this.createAccessToken = createAccessToken;
  this.logout = logout;
  this.addStudentExamInfo = addStudentExamInfo;
  this.addPointInfo = addPointInfo;
  this.getUserRegister = getUserRegister;
}

export default ManagerService;
