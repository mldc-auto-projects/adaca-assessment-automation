// Bonus Points (optional, time permitting)
// Implement a data-driven test in Selenium using a small JSON file
// Add basic error handling in your tests

const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const LoginPage = require('../../pages/loginPage');

const testData = require('../../data/loginTestData.json');

(async function dataDrivenLoginTests() {
  for (const data of testData) {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
      await driver.get('https://www.saucedemo.com/v1/');
      const loginPage = new LoginPage(driver);

      await loginPage.login(data.username, data.password);

      if (data.expected === 'success') {
        await driver.wait(until.elementLocated(By.className('inventory_list')), 5000);
        console.log(`Login passed for: ${data.username}`);
      } else {
        // Wait for error element and validate message
        await driver.wait(until.elementLocated(By.css('h3[data-test="error"]')), 5000);
        const errorElement = await driver.findElement(By.css('h3[data-test="error"]'));
        const errorMessage = await errorElement.getText();

        console.log(`Error displayed for ${data.username}: "${errorMessage}"`);

        if (
          errorMessage.includes('locked out') ||
          errorMessage.includes('do not match')
        ) {
          console.log(`Correct error message shown for: ${data.username}`);
        } else {
          throw new Error(`Unexpected error message for ${data.username}: "${errorMessage}"`);
        }
      }

    } catch (err) {
      console.error(`Test failed for user: ${data.username} — ${err.message}`);

      // Save a screenshot for failed results
      const filename = `report/login-fail-${data.username}.png`;
      const screenshot = await driver.takeScreenshot();
      fs.writeFileSync(filename, screenshot, 'base64');

    } finally {
      await driver.quit();
    }
  }
})();
