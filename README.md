# LoopQA Playwright Automation Framework

## Overview

This project is a Playwright automation framework built using **TypeScript** for the LoopQA QA Automation Engineer technical assessment.

The framework follows the **Page Object Model (POM)** design pattern and uses **data-driven testing** by reading test scenarios from a JSON file. This approach minimizes code duplication and makes it easy to add new test cases without modifying the test logic.

---

## Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- JSON Data-Driven Testing
- Dotenv
- GitHub Actions

---

## Project Structure

```
LoopQA-Automation
│
├── data
│   └── tasks.json
│
├── pages
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── BoardPage.ts
│
├── tests
│   └── board.spec.ts
│
├── utils
│   └── playwright.env.ts
│
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Features

- Page Object Model (POM)
- Data-driven test execution
- Environment variable configuration
- HTML reports
- Screenshots on failure
- Video recording on failure
- Trace collection on failure
- CI-ready GitHub Actions workflow

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Setup

Create a `.env` file using the values from `.env.example`.

Example:

```text
BASE_URL=https://create-asana-like-pr-39y5.bolt.host/
USERNAME=admin
PASSWORD=password123
```

---

## Run Tests

Run all tests:

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Run in debug mode:

```bash
npm run test:debug
```

---

## View HTML Report

```bash
npm run report
```

---

## Framework Design

This framework follows the **Page Object Model (POM)**, where page interactions are separated from the test logic.

The test suite is **data-driven**, meaning all test scenarios are loaded from `tasks.json`. Adding a new test case only requires adding a new JSON object without changing the automation code.

---

## Notes

At the time of development, the provided demo application (`https://create-asana-like-pr-39y5.bolt.host/`) returned an `ERR_SSL_PROTOCOL_ERROR` in both Chrome and Playwright. The automation framework has been implemented according to the assessment requirements, and the tests are ready to execute once the target environment becomes available.
