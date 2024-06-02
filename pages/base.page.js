const assert = require('assert')
const softAssert = require('soft-assert')


module.exports = class BasePage {

  get body() { return $('body[class="h-100"]')}

  async navigateToPage(params = '') {
    if (await this.requiredPathOfUrl == null) {
      browser.url('/' + params)
    } else {
      browser.url('/' + this.requiredPathOfUrl + params)
    }
  }

  async buttonClick(button) {
    assert(await button.waitForClickable(), 'The Button is Not Clickable')
    await button.click()
  }

  async clickOutsideInput() {
    await this.body.click()
  }

  async inputData(inputFiled, inputData = '') {
    assert(await inputFiled.waitForClickable(), 'Input Field is Not Clickable')
    await inputFiled.click()
    await inputFiled.setValue(inputData)
    await this.clickOutsideInput()
  }

  async validateErrorMessage(errElem, errElemText) {
    softAssert.softTrue(await errElem.waitForDisplayed(), 'Error Message is Not Displayed')
    softAssert.softAssert(await errElem.getText(), errElemText, `Wrong Error Text! \nEXPECTED: ${errElemText} \nACTUAL: ${await errElem.getText()}`)
  }
}




