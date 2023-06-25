import StudentAccountModal from "../../models/studentAccount.model.js";
import StudentAccountService from "../StudentAccount/index.js";

async function getUserRegister() {
  const student_list = await StudentAccountModal.find({
    register_contest_form: { $ne: null },
  });
  const return_data = await Promise.all(
    student_list.map(
      async (student) => await new StudentAccountService(student).getStudent()
    )
  );
  return return_data;
}

export default getUserRegister;
