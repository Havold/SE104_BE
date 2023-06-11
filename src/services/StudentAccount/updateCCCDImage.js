import cloudinary from "../../config/cloudinary.js";

async function updateCCCDImage(file_array) {
  if (!file_array.length)
    return Promise.reject({ message: "No file uploaded" });
  const front_img = await cloudinary.upload(
    file_array[0].path,
    "cccd_image/",
    `${this.StudentAccount._id}_front`
  );
  const backside_img = await cloudinary.upload(
    file_array[1].path,
    "cccd_image/",
    `${this.StudentAccount._id}_backside`
  );
  this.StudentAccount.CCCD_detail.CCCD_image_front = front_img.url;
  this.StudentAccount.CCCD_detail.CCCD_image_backside = backside_img.url;
  await this.StudentAccount.save();
  return await this.getStudent();
}

export default updateCCCDImage;
