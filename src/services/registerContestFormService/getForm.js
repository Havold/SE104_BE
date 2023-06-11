async function getForm() {
  const data = await this.registerForm.toObject({
    getters: true,
    virtuals: false,
  });
  delete data.__v;
  return JSON.parse(JSON.stringify(data).replaceAll('"_id"', '"id"'));
}

export default getForm;
