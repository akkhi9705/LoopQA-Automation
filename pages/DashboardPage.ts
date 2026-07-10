import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openProject(project: string): Promise<void> {
    switch (project) {
      case 'Web Application':
        await this.page
          .getByRole('button', { name: /^Web Application/i })
          .click();
        break;

      case 'Mobile Application':
        await this.page
          .getByRole('button', { name: /^Mobile Application/i })
          .click();
        break;

      default:
        throw new Error(`Unknown project: ${project}`);
    }
  }
}