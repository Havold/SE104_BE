import RegisterContestModal from "../../models/registerContestForm.model.js";
import StudentAccountModal from "../../models/studentAccount.model.js";

async function addForm(student_id, exam_type) {
  const student_data = await StudentAccountModal.findById(student_id);
  if (!student_data)
    return Promise.reject({ status: 404, message: "Not found student" });
  const student_object = await student_data.toObject();
  delete student_object.contact_info.contact._id;
  this.registerForm = new RegisterContestModal({
    exam_type,
    student_id,
    place_of_birth: student_object.place_of_birth,
    priority_area: student_object.priority_info.priority_area,
    priority_object: student_object.priority_info.priority_object,
    graduated_year: student_object.priority_info.graduated_year,
    household: student_object.contact_info.household,
    contact: student_object.contact_info.contact,
    sex: student_object.sex,
    CCCD: student_object.CCCD,
    CCCD_detail: {
      date_provide: student_object.CCCD_detail.date_provide,
      provide_by: student_object.CCCD_detail.provide_by,
    },
    birth: student_object.birth,
    name: student_object.name,
  });
  await this.registerForm.save();
  return await this.get();
}
export default addForm;
