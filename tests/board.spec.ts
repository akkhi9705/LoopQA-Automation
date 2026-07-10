import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { BoardPage } from '../pages/BoardPage';
import testData from '../data/tasks.json';

test.describe('LoopQA Data Driven Tests', () => {

  for (const tc of testData) {

    test(`${tc.project} | ${tc.column} | ${tc.task}`, async ({ page }) => {

      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);
      const boardPage = new BoardPage(page);

      await test.step('Navigate to application', async () => {
        await loginPage.navigate(process.env.BASE_URL!);
      });

      await test.step('Login', async () => {
        await loginPage.login(
          process.env.APP_USERNAME!,
          process.env.APP_PASSWORD!
        );
      });

      await test.step('Open project', async () => {
        await dashboardPage.openProject(tc.project);
      });

      await test.step('Verify task exists', async () => {
        await boardPage.verifyTaskExists(tc.task);
      });

      await test.step('Verify task column', async () => {
        await boardPage.verifyTaskInColumn(
          tc.task,
          tc.column
        );
      });

      await test.step('Verify tags', async () => {
        await boardPage.verifyTags(tc.tags);
      });

    });

  }

});