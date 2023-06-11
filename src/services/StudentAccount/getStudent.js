import registerFormService from "../registerContestFormService/index.js";
import StudentAccountModal from "../../models/studentAccount.model.js";

async function getStudent() {
  let register_contest_form = null;
  if (this.StudentAccount.register_contest_form) {
    await StudentAccountModal.populate(this.StudentAccount, {
      path: "register_contest_form",
    });
    register_contest_form = await new registerFormService(
      this.StudentAccount.register_contest_form
    ).get();
  }
  const object_data = await this.StudentAccount.toObject({
    getters: true,
    virtuals: false,
  });
  delete object_data.__v;
  delete object_data.tokens;
  delete object_data.password;
  const format_id = JSON.parse(
    JSON.stringify(object_data).replaceAll("_id", "id")
  );
  format_id.register_contest_form = register_contest_form;
  return format_id;
}

export default getStudent;
