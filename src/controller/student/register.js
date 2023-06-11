import StudentAccountService from "../../services/StudentAccount/index.js";

const register = async (req, res, next) => {
  try {
    const { name, email, password, CCCD } = req.body;
    await new StudentAccountService().register({
      name,
      email,
      password,
      CCCD,
    });
    res.status(201).json({
      message: "Create student account success",
    });
  } catch (error) {
    next(error);
  }
};

export default register;
