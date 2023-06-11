import StudentAccountModal from "../../models/studentAccount.model.js";

async function addInfo(student_information) {
  delete student_information.email;
  delete student_information.password;
  delete student_information.CCCD;
  delete student_information.name;
  delete student_information.tokens;
  delete student_information.register_contest_form;
  this.StudentAccount = await StudentAccountModal.findByIdAndUpdate(
    this.StudentAccount._id,
    student_information,
    {
      new: true,
    }
  );
  return await this.getStudent();
}
export default addInfo;
