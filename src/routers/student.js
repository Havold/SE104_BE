import express from "express";
import studentAccountAuth from "../middleware/studentAccountAuth.js";
import register from "../controller/student/register.js";
import login from "../controller/student/login.js";
import logout from "../controller/student/logout.js";
import getAccessToken from "../controller/student/getAccessToken.js";

const studentAccountRouter = express.Router();
studentAccountRouter.post("/", register);
studentAccountRouter.post("/login", login);
studentAccountRouter.delete("/current/logout", studentAccountAuth, logout);
studentAccountRouter.post("/refresh_token", getAccessToken);

export default studentAccountRouter;
