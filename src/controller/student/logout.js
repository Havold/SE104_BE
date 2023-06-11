const logout = async (req, res, next) => {
  try {
    const { studentAccountService } = req;
    await studentAccountService.logout();
    res.status(200).json({ message: "Logout success" });
  } catch (err) {
    next(err);
  }
};

export default logout;
