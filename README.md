# Adaca Assessment - Automation Test Suite

This project is a submission for the Automation Test Engineer Technical Assessment. It covers automated end-to-end tests using both Selenium WebDriver and Playwright for [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/).

---

## Setup Instructions

### 1. Install dependencies
```bash
npm install
npx playwright install
```

### 2. Folder structure
```
.
├── data/                  # JSON files for data-driven tests
├── pages/                 # Page Object Model classes
├── report/                # Screenshots from test failures
├── tests/
│   ├── selenium/          # Selenium test cases
│   └── playwright/        # Playwright test case
├── utils/                 # Shared utility functions (e.g., timestamp, credentials)
└── README.md
```

---

## Test Scripts

### Selenium Tests

| Description                     | Command                              |
|----------------------------------|---------------------------------------|
| Run full login → add → delete   | `npm run test:e2e`                   |
| Run data-driven login test      | `npm run test:login-data-driven`     |

### Playwright Test

| Description                  | Command                                     |
|------------------------------|----------------------------------------------|
| Run login test (headless)    | `npm run test:playwright`                  |
| Run login test (headed)      | `npx playwright test tests/playwright/login.playwright.test.js --headed` |

---

## Utility Function (Part 3)

A shared utility function `addTimestamp(str)` is located in `utils/stringUtils.js`.  
It is used to demonstrate JavaScript proficiency by appending a timestamp to a string input.  

This file also includes `testCredentials` that are reused across both Selenium and Playwright tests.

---

## Assumptions Made

- The site used for automation is [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/), which provides a working login, inventory, and cart functionality.
- The credentials `standard_user / secret_sauce` are stored in a reusable utility file.
- For the bonus part, data-driven testing is implemented using a small JSON file (`loginTestData.json`) that includes valid and invalid user cases.
- Failed tests automatically save screenshots inside the `report/` folder.

---

## Coverage Summary

- [x] Selenium test suite with login, add, delete flows
- [x] Page Object Model used for Login and Product pages
- [x] Explicit waits for dynamic elements
- [x] Screenshot capture on test failure
- [x] Console logs for test results
- [x] Playwright test covering login interaction
- [x] Reusable utility function used in both frameworks
- [x] Bonus: Data-driven login test from JSON
- [x] Bonus: Error handling and screenshot logging per test case

---

## Author

Mary Lou Dela cerna  
GitHub: [https://github.com/mldc-auto-projects/adaca-assessment-automation](https://github.com/mldc-auto-projects/adaca-assessment-automation)


---

## Related Projects

If you're interested in more advanced automation with Playwright, feel free to check out my other project:

**▶ Playwright E2E - SauceDemo**  
GitHub: [https://github.com/mldc-auto-projects/playwright-e2e-saucedemo](https://github.com/mldc-auto-projects/playwright-e2e-saucedemo)

This repository contains a full end-to-end automation test suite built entirely with Playwright, featuring:
- Modular page objects
- Full cart and checkout flow coverage
- Clean separation of selectors, logic, and test cases
