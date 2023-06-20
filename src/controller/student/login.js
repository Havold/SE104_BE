import StudentAccountService from "../../services/StudentAccount/index.js";

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("login")
    const data = await new StudentAccountService().login(email, password);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default login;
