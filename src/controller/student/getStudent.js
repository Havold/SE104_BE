const getStudent = async (req, res, next) => {
  try {
    const studentAccountService = req.studentAccountService;
    res.status(200).json({ data: await studentAccountService.getStudent() });
  } catch (err) {
    next(err);
  }
};

export default getStudent;
