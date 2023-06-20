import ExamInfoModal from "../../models/examInfo.model.js";
import StudentAccountModal from "../../models/studentAccount.model.js";
import StudentAccountService from "../StudentAccount/index.js";

async function addPointInfo({
  student_id,
  student_email,
  point_list,
  pass_list,
}) {
  let student;
  if (student_id) student = await StudentAccountModal.findById(student_id);
  else student = await StudentAccountModal.findOne({ email: student_email });
  if (!student.register_contest_form)
    return Promise.reject({
      status: 409,
      message: "Student not register",
    });
  const exam = await ExamInfoModal.findOne({ student_id: student._id });
  exam.point_list = point_list;
  exam.pass_list = pass_list;
  await exam.save();
  return await new StudentAccountService(student).getStudent();
}

export default addPointInfo;
