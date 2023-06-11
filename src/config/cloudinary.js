import { v2 as cloudinary } from "cloudinary";
import {} from "dotenv/config";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class Cloudinary {
  constructor(Cloudinary) {
    this.Cloudinary = Cloudinary;
  }
  async upload(file_path, file_folder, file_name) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        file_path,
        { folder: file_folder, public_id: file_name },
        (error, result) => {
          fs.unlink(file_path, (unlinkError) => {
            if (unlinkError) {
              console.error("File deletion error:", unlinkError);
            } else {
              console.log("File deleted successfully");
            }
          });
          if (error) reject(error);
          else resolve(result);
        }
      );
    });
  }
}
export default new Cloudinary(cloudinary);
