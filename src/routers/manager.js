import express from "express";
import login from "../controller/manager/login.js";
import logout from "../controller/manager/logout.js";
import register from "../controller/manager/register.js";
import managerAuth from "../middleware/managerAuth.js";
import addStudentExamInfo from "../controller/manager/addStudentExamInfo.js";

const managerRouter = express.Router();

managerRouter.post("/login", login);
managerRouter.delete("/current/logout", managerAuth, logout);
managerRouter.post("/", register);
managerRouter.post("/current/addExamInfo", managerAuth, addStudentExamInfo);

export default managerRouter;
