const registerContest = async (req, res, next) => {
  try {
    const { studentAccountService } = req;
    const data = await studentAccountService.registerContest();
    res.status(200).json({ message: "Register success", data });
  } catch (err) {
    next(err);
  }
};

export default registerContest;
