import addForm from "./addForm.js";
import addMajors from "./addMajors.js";
import deleteMajor from "./deleteMajor.js";
import getForm from "./getForm.js";
import init from "./init.js";
import swapMajorRank from "./swapMajorRank.js";

function RegisterContestFormService(registerForm) {
  this.registerForm = registerForm;
  this.get = getForm;
  this.add = addForm;
  this.addMajor = addMajors;
  this.deleteMajor = deleteMajor;
  this.swapMajorRank = swapMajorRank;
  this.init = init;
}

export default RegisterContestFormService;
