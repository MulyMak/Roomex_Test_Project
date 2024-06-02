const LoginPage = require('../../pages/login.page')
const errMessages = require('../../mock_data/error_messages')
const softAssert = require('soft-assert');


describe('LOGIN FUNCTIONALITY', () => {
  it('Empty Email and Password Errors Test', async () => {
    await LoginPage.navigateToPage()
    await LoginPage.buttonClick(LoginPage.loginBtn)
    await LoginPage.validateErrorMessage(LoginPage.emailError, errMessages.en.login_empty_email_error)
    await LoginPage.validateErrorMessage(LoginPage.passwordError, errMessages.en.login_empty_password_error)
    await softAssert.softAssertAll()
  })
})

