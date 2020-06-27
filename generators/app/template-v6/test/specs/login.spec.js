const Login = require('../pageObjects/Login.page.js');

const login = new Login();

const validUser = {
    email: '{{validUser}}',
    password: '{{validPass}}'
};

describe('Login Page', function () {
    beforeEach(function() {
        browser.url('./');
    });

    it('should have proper fields', function () {
        expect(login.$email).toExist();
        expect(login.$password).toExist();
        expect(login.$submit).toExist();
    })

    it('should let you login with valid credentials', function () {
        login.login(validUser);

        // NOTE replace with your own custom assertion here
        expect(login.$submit).not.toExist();
    });

    it('should error on a missing email', function () {
        login.login({
            ...validUser,
            email: ''
        });

        // NOTE replace with your own custom assertion here
        expect(login.$submit).toExist();
    });

    it('should error on a invalid email', function () {
        login.login({
            ...validUser,
            email: '{{invalidUser}}'
        });

        // NOTE replace with your own custom assertion here
        expect(login.$submit).toExist();
    });

    it('should error on missing password', function () {
        login.login({
            ...validUser,
            password: ''
        });

        // NOTE replace with your own custom assertion here
        expect(login.$submit).toExist();
    });
})
