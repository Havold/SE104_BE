const getUserRegister = async (req, res, next) => {
  try {
    const { managerService } = req;
    const data = await managerService.getUserRegister();
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default getUserRegister;
