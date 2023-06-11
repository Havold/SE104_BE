async function deleteMajor(index) {
  if (index < 0 || index > this.registerForm.preference_majors.length)
    return Promise.reject({ status: 409, message: "Error index" });
  for (let i = index + 1; i < this.registerForm.preference_majors.length; ++i) {
    this.registerForm.preference_majors[i].rank -= 1;
  }
  this.registerForm.preference_majors.splice(index, 1);
  return await this.registerForm.save();
}

export default deleteMajor;
