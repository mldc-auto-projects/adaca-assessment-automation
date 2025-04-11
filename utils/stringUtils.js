// Covers the Part 3: JavaScript proficiency
// A utility module used in both Selenium and Playwright tests

function addTimestamp(str) {
  const timestamp = Date.now();
  return `${str}_${timestamp}`;
}

// Default test credentials
const testCredentials = {
  username: 'standard_user',
  password: 'secret_sauce',
};

module.exports = {
  addTimestamp,
  testCredentials,
};
