const updateCCCDImage = async (req, res, next) => {
  try {
    const image_array = req.files;
    const { studentAccountService } = req;
    const data = await studentAccountService.updateCCCDImage(image_array);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

export default updateCCCDImage;
