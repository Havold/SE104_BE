const updateInfo = async (req, res, next) => {
  try {
    const { studentAccountService } = req;
    const update_data = req.body;
    const data = await studentAccountService.updateInfo(update_data);
    res.status(200).json({ message: "Update success", data });
  } catch (err) {
    next(err);
  }
};

export default updateInfo;
