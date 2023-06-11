import ManagerService from "../services/managerService/index.js";

const managerAuth = async (req, res, next) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];
    const managerService = new ManagerService();
    const { indexToken } = await managerService.verifyToken(access_token);
    req.managerService = managerService;
    req.access_token = access_token;
    req.indexToken = indexToken;
    next();
  } catch (error) {
    next(error);
  }
};

export default managerAuth;
