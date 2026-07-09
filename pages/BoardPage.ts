import { Page, Locator, expect } from '@playwright/test';

export class BoardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Returns the locator for a task card.
   */
  getTask(taskName: string): Locator {
    return this.page.getByText(taskName);
  }

  /**
   * Returns the locator for a board column.
   */
  getColumn(columnName: string): Locator {
    return this.page.getByText(columnName);
  }

  /**
   * Verify task exists.
   */
  async verifyTaskExists(taskName: string) {
    await expect(this.getTask(taskName)).toBeVisible();
  }

  /**
   * Verify task belongs to the expected column.
   */
  async verifyTaskInColumn(taskName: string, columnName: string) {
    const column = this.getColumn(columnName);

    await expect(column).toContainText(taskName);
  }

  /**
   * Verify all expected tags.
   */
  async verifyTags(tags: string[]) {
    for (const tag of tags) {
      await expect(this.page.getByText(tag)).toBeVisible();
    }
  }
}