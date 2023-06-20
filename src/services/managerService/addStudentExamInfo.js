import ExamInfoModal from "../../models/examInfo.model.js";
import StudentAccountModal from "../../models/studentAccount.model.js";
import StudentAccountService from "../StudentAccount/index.js";

async function addStudentExamInfo({
  student_id,
  student_email,
  exam_date,
  exam_venue,
  exam_room,
}) {
  let new_student;
  if (student_id) new_student = await StudentAccountModal.findById(student_id);
  else
    new_student = await StudentAccountModal.findOne({ email: student_email });
  if (new_student.exam_info)
    return Promise.reject({
      status: 409,
      message: "Student have been register",
    });
  if (!new_student.register_contest_form)
    return Promise.reject({
      status: 409,
      message: "Student not register",
    });
  const ExamInfo = new ExamInfoModal({
    student_id: new_student._id,
    exam_date,
    exam_room,
    exam_venue,
  });
  await ExamInfo.save();
  new_student.exam_info = ExamInfo._id;
  await new_student.save();
  return await new StudentAccountService(new_student).getStudent();
}
export default addStudentExamInfo;
