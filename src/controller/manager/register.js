import ManagerService from "../../services/managerService/index.js";

const register = async (req, res, next) => {
  try {
    const { account, password, register_code } = req.body;
    await new ManagerService().register(
      {
        account,
        password,
      },
      register_code
    );
    res.status(201).json({
      message: "Create manager account success",
    });
  } catch (error) {
    next(error);
  }
};

export default register;
