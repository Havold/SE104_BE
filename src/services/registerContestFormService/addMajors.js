async function addMajors(major_data) {
  this.registerForm.preference_majors.push({
    ...major_data,
    rank: this.registerForm.preference_majors.length,
  });
  await this.registerForm.save();
  return await this.get();
}

export default addMajors;
