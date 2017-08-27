class Login {
  get email () { return $('{{usernameSelector}}'); }
  get password () { return $('{{passwordSelector}}'); }
  get submit () { return $('{{submitSelector}}'); }

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  isLoggedIn () {
    example: return browser.getUrl() !== '{{url}}';
  }
}

module.exports = Login;
