import RegisterContestModal from "../../models/registerContestForm.model.js";

async function init(id) {
  this.registerForm = await RegisterContestModal.findById(id);
  return await this.get();
}

export default init;
