async function logout() {
  this.Manager.tokens.splice(this.indexToken, 1);
  await this.Manager.save();
  return true;
}

export default logout;
