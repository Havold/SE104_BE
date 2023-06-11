import addForm from "./addForm.js";
import getForm from "./getForm.js";

function registerContestFormService(registerForm) {
  this.registerForm = registerForm;
  this.get = getForm;
  this.add = addForm;
}

export default registerContestFormService;
