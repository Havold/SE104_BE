import RegisterContestFormService from "../../services/registerContestFormService/index.js";

const addMajor = async (req, res, next) => {
  try {
    const { studentAccountService } = req;
    const major_data = req.body;
    const registerFormService = new RegisterContestFormService();
    await registerFormService.init(
      studentAccountService.StudentAccount.register_contest_form
    );
    const data = await registerFormService.addMajor(major_data);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default addMajor;
