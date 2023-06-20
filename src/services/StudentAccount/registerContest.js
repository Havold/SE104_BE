import registerContestFormService from "../registerContestFormService/index.js";

async function registerContest(exam_type) {
  if (this.StudentAccount.register_contest_form)
    return Promise.reject({
      status: 409,
      message: "Student has been register",
    });
  const registerService = new registerContestFormService();
  const register_result = await registerService.add(
    this.StudentAccount._id,
    exam_type
  );
  this.StudentAccount.register_contest_form = register_result.id;
  await this.StudentAccount.save();
  return register_result;
}

export default registerContest;
