// Covers the Part 2: Playwright Test
// - Navigation to the web application
// - Interacting with a form element (login form)
// Also demonstrates Part 3: Utility function usage

const { test, expect } = require('@playwright/test');
const { addTimestamp, testCredentials } = require('../../utils/stringUtils');

test('Login with valid credentials on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  // Part 3: Log the result of the utility function
  const demoUsername = addTimestamp(testCredentials.username);
  console.log('Generated dynamic username (for demo/logging only):', demoUsername);

  // Interact with the login form
  await page.fill('#user-name', testCredentials.username);
  await page.fill('#password', testCredentials.password);
  await page.click('#login-button');

  // Verifies that the user lands on the inventory page
  await expect(page.locator('.inventory_list')).toBeVisible();
});
