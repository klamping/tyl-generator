class Login {
  get email () { return $('#username'); }
  get password () { return $('#password'); }
  get submit () { return $('#login button'); }

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  isLoggedIn () {
    example: return browser.getUrl() !== 'http://testyourlog.in/example/';
  }
}

module.exports = Login;
