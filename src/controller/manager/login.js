import ManagerService from "../../services/managerService/index.js";

const login = async (req, res, next) => {
  try {
    console.log("call")
    const { account, password } = req.body;
    const data = await new ManagerService().login(account, password);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default login;
