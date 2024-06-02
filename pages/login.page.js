const BasePage = require('./base.page')


class LoginPage extends BasePage {

  get requiredPathOfUrl() { return 'login' }
  get loginBtn() { return $('button[type="submit"]')}

  get emailError() { return $('[formcontrolname="username"] [rx-error] .ng-star-inserted')}
  get passwordError() { return $('[formcontrolname="password"] [rx-error] .ng-star-inserted')}
}

module.exports = new LoginPage()