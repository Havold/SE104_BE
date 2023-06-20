const registerContest = async (req, res, next) => {
  try {
    const { exam_type } = req.body;
    const { studentAccountService } = req;
    const data = await studentAccountService.registerContest(exam_type);
    res.status(200).json({ message: "Register success", data });
  } catch (err) {
    next(err);
  }
};

export default registerContest;
