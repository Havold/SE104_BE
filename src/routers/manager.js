import express from "express";
import login from "../controller/manager/login.js";
import logout from "../controller/manager/logout.js";
import register from "../controller/manager/register.js";
import managerAuth from "../middleware/managerAuth.js";
import addStudentExamInfo from "../controller/manager/addStudentExamInfo.js";
import addPointInfo from "../controller/manager/addPointInfo.js";
import getUserRegister from "../controller/manager/getUserRegister.js";
import getAccessToken from "../controller/manager/getAccessToken.js";

const managerRouter = express.Router();

managerRouter.post("/login", login);
managerRouter.delete("/current/logout", managerAuth, logout);
managerRouter.get("/current", (req, res) => {
  res.status(200).json({ data: { message: "OK" } });
});
managerRouter.post("/current/addExamInfo", managerAuth, addStudentExamInfo);
managerRouter.post("/current/addPointInfo", managerAuth, addPointInfo);
managerRouter.get("/current/getUserRegister", managerAuth, getUserRegister);
managerRouter.post("/refresh_token", getAccessToken);

export default managerRouter;
