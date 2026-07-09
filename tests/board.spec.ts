import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { BoardPage } from '../pages/BoardPage';
import testData from '../data/tasks.json';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let boardPage: BoardPage;

test.describe('LoopQA Data Driven Tests', () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    boardPage = new BoardPage(page);
  });

  for (const tc of testData) {

    test(`${tc.project} | ${tc.column} | ${tc.task}`, async () => {

      await test.step('Navigate to application', async () => {
        await loginPage.navigate(process.env.BASE_URL!);
      });

      await test.step('Login', async () => {
        await loginPage.login(
          process.env.USERNAME!,
          process.env.PASSWORD!
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