const logout = async (req, res, next) => {
  try {
    const { managerService } = req;
    await managerService.logout();
    res.status(200).json({ message: "Logout success" });
  } catch (err) {
    next(err);
  }
};

export default logout;
