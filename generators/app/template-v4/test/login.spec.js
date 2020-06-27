const Login = require('./Login.page.js');

const login = new Login();

describe('Login Page', function () {
  const validEmail = '{{validUser}}';
  const validPass = '{{validPass}}';

  beforeEach(function() {
    browser.url('./');
  });

  it('should look nice', function () {
    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  })

  it('should let you login with valid credentials', function () {
    login.login(validEmail, validPass);

    expect(login.isLoggedIn(), 'On logged in page').to.be.true;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on a missing email', function () {
    login.login('', validPass);

    expect(login.isLoggedIn(), 'Not on logged in page').to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on a invalid email', function () {
    login.login('{{invalidUser}}', validPass);

    expect(login.isLoggedIn(), 'Not on logged in page').to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should error on missing password', function () {
    login.login(validEmail, '');

    expect(login.isLoggedIn(), 'Not on logged in page').to.be.false;

    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });
})
