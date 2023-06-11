import express from "express";
import studentAccountRouter from "./student.js";
import managerRouter from "./manager.js";
const router = express.Router();
router.use("/student", studentAccountRouter);
router.use("/manager", managerRouter);

export default router;
