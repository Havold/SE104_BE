import express from "express";
import studentAccountRouter from "./student.js";

const router = express.Router();
router.use("/student", studentAccountRouter);

export default router;
