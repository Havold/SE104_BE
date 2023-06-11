const addStudentExamInfo = async (req, res, next) => {
  try {
    const { student_id, exam_date, exam_venue, exam_room } = req.body;
    const { managerService } = req;
    const data = await managerService.addStudentExamInfo(student_id, {
      exam_date,
      exam_venue,
      exam_room,
    });
    res.status(200).json({
      data,
    });
  } catch (err) {
    next(err);
  }
};

export default addStudentExamInfo;
