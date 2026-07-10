# LoopQA Playwright Automation Framework

## Overview

This project is a Playwright automation framework built using TypeScript for the LoopQA QA Automation Engineer technical assessment.

The framework follows the **Page Object Model (POM)** design pattern and uses **data-driven testing** by reading test scenarios from a JSON file. This approach minimizes code duplication and makes it easy to add or modify test cases without changing the test logic.

---

## Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- JSON Data-Driven Testing
- Dotenv

---

## Test Coverage

The framework automates validation of:

- User authentication
- Project navigation
- Task existence
- Task column validation
- Task tag validation

All test scenarios are executed using data from `tasks.json`.

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
- Reusable page objects
- HTML test reports
- Screenshots on failure
- Video recording on failure
- Trace collection on failure

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd LoopQA-Automation
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

Create a `.env` file in the project root using the following format:

```text
BASE_URL=https://create-asana-like-pr-39y5.bolt.host/
APP_USERNAME=admin
APP_PASSWORD=password123
```

---

## Run Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

---

## View HTML Report

Generate and open the Playwright HTML report:

```bash
npm run report
```

---

## Framework Design

This framework follows the **Page Object Model (POM)**, where page interactions are encapsulated in dedicated page classes while test logic remains clean and readable.

The test suite is **data-driven**, with all test scenarios maintained in `tasks.json`. New scenarios can be added by updating the JSON file without modifying the automation code.

---

## Author

**Akhil Reddy Apuri**

---
