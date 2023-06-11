import StudentAccountService from "../../services/StudentAccount/index.js";

const getAccessToken = async (req, res, next) => {
  try {
    const { refresh_token } = req.body;
    const access_token = await new StudentAccountService().createAccessToken(
      refresh_token
    );
    res.status(200).json({ data: { access_token } });
  } catch (err) {
    next(err);
  }
};

export default getAccessToken;
