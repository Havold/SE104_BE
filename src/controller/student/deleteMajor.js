import RegisterContestFormService from "../../services/registerContestFormService/index.js";

const deleteMajor = async (req, res, next) => {
  try {
    const { studentAccountService } = req;
    const { current_index } = req.body;
    const registerFormService = new RegisterContestFormService();
    await registerFormService.init(
      studentAccountService.StudentAccount.register_contest_form
    );
    const data = await registerFormService.deleteMajor(current_index);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default deleteMajor;
