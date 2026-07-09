import './utils/playwright.env';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Execute test files in parallel
  fullyParallel: true,

  // Prevent accidental test.only commits in CI
  forbidOnly: !!process.env.CI,

  // Retry only in CI
  retries: process.env.CI ? 2 : 0,

  // Use a single worker in CI for stability
  workers: process.env.CI ? 1 : undefined,

  // Generate HTML report
  reporter: 'html',

  use: {
    // Open browser locally, headless in CI
    headless: !!process.env.CI,

    viewport: {
      width: 1440,
      height: 900,
    },

    // Timeout settings
    actionTimeout: 10000,
    navigationTimeout: 30000,

    // Debug artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  // Execute only Chromium for this assessment
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});