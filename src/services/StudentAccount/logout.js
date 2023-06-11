async function logout() {
  this.StudentAccount.tokens.splice(this.indexToken, 1);
  await this.StudentAccount.save();
  return true;
}

export default logout;
