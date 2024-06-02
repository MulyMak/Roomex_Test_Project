const ResetPasswordPage = require('../../pages/reset_password.page')
const errMessages = require('../../mock_data/error_messages')
const softAssert = require('soft-assert');


describe('RESET PASSWORD FUNCTIONALITY', () => {
  it('Non-existing Email Error Test', async () => {
    await ResetPasswordPage.navigateToPage()
    await ResetPasswordPage.inputData(ResetPasswordPage.emailField, "bob@roomex.com")
    await ResetPasswordPage.buttonClick(ResetPasswordPage.resetPasswordBtn)
    await ResetPasswordPage.validateErrorMessage(ResetPasswordPage.resetPasswordError, errMessages.en.reset_pass_invalid_email_error)
    await softAssert.softAssertAll()
  })
})
