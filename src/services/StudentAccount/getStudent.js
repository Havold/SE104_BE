async function getStudent() {
  const data = await this.StudentAccount.toObject({
    getters: true,
    virtuals: false,
  });
  delete data.__v;
  data.id = data._id;
  delete data._id;
  delete data.tokens;
  delete data.password;
  return data;
}

export default getStudent;
