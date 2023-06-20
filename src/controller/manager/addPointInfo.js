const addPointInfo = async (req, res, next) => {
  try {
    const { student_id, student_email, point_list, pass_list } = req.body;
    const { managerService } = req;
    const data = await managerService.addPointInfo({
      student_id,
      student_email,
      point_list,
      pass_list,
    });
    res.status(200).json({
      data,
    });
  } catch (err) {
    next(err);
  }
};

export default addPointInfo;
