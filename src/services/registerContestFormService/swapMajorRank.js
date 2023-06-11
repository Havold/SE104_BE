async function swapMajorRank(current_index, new_index) {
  if (
    current_index < 0 ||
    current_index > this.registerForm.preference_majors.length ||
    new_index < 0 ||
    new_index > this.registerForm.preference_majors.length
  )
    return Promise.reject({ status: 409, message: "Error index" });
  [
    this.registerForm.preference_majors[current_index],
    this.registerForm.preference_majors[new_index],
  ] = [
    this.registerForm.preference_majors[new_index],
    this.registerForm.preference_majors[current_index],
  ];
  this.registerForm.preference_majors[current_index].rank = current_index;
  this.registerForm.preference_majors[new_index].rank = new_index;
  await this.registerForm.save();
  return await this.get();
}

export default swapMajorRank;
