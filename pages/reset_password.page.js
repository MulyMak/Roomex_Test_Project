const BasePage = require('./base.page')

class ResetPassword extends BasePage {

  get requiredPathOfUrl() { return 'forgot-password' }
  get emailField() { return $('input[type="email"]') }
  get resetPasswordBtn() { return $('button[type="submit"]')}

  get resetPasswordError() { return $('*[type="danger"] div')}
}

module.exports = new ResetPassword()