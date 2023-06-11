import StudentAccountService from "../services/StudentAccount/index.js";

const userAuth = async (req, res, next) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];
    const studentAccountService = new StudentAccountService();
    const { indexToken } = await studentAccountService.verifyToken(
      access_token
    );
    req.studentAccountService = studentAccountService;
    req.access_token = access_token;
    req.indexToken = indexToken;
    next();
  } catch (error) {
    next(error);
  }
};

export default userAuth;
