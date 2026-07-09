import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly webApplication: Locator;
  readonly mobileApplication: Locator;

  private readonly projectLocators: Record<string, Locator>;

  constructor(page: Page) {
    this.page = page;

    this.webApplication = page.getByText('Web Application');
    this.mobileApplication = page.getByText('Mobile Application');

    this.projectLocators = {
      'Web Application': this.webApplication,
      'Mobile Application': this.mobileApplication,
    };
  }

  async openProject(project: string) {
    const projectLocator = this.projectLocators[project];

    if (!projectLocator) {
      throw new Error(`Unknown project: ${project}`);
    }

    await projectLocator.click();
  }
}