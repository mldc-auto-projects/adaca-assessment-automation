// Covers the Part 1: Selenium WebDriver Test Suite
// User Login
// Adding Item
// Deleting Item
// Also demonstrates usage of utility function for Part 3 (JavaScript proficiency)

const { Builder } = require('selenium-webdriver');
const fs = require('fs');
const LoginPage = require('../../pages/loginPage');
const ProductPage = require('../../pages/productPage');
const { addTimestamp, testCredentials } = require('../../utils/stringUtils');

(async function fullE2ETest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.saucedemo.com/v1/');

    const loginPage = new LoginPage(driver);
    const productPage = new ProductPage(driver);

    // Part 3: Log usage of utility function
    const demoUsername = addTimestamp(testCredentials.username);
    console.log('Generated dynamic username (for demo/logging only):', demoUsername);

    // User login
    await loginPage.login(testCredentials.username, testCredentials.password);
    console.log('Successful Login.');

    // Adding an item (e.g., a to-do item)
    await productPage.addFirstItemToCart();
    console.log('Item is successfully added to cart.');

    // Navigate to cart
    await productPage.goToCart();
    let inCart = await productPage.isItemInCart();
    if (!inCart) throw new Error('Item not found in cart after adding.');
    console.log('Item is confirmed present in cart.');

    // Deleting an item
    await productPage.removeItemFromCart();
    console.log('Item is successfully removed from cart.');

    // Verification after removing the item
    inCart = await productPage.isItemInCart();
    if (inCart) throw new Error('Item is still in cart after deletion.');
    console.log('Cart is now empty. Verified passed');

  } catch (err) {
    console.error('Test failed:', err.message);

    // Screenshot capture on test failure
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync('report/e2e-test-fail.png', screenshot, 'base64');
  } finally {
    await driver.quit();
  }
})();
