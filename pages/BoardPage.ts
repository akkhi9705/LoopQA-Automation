import { Page, Locator, expect } from '@playwright/test';

export class BoardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getTask(taskName: string): Locator {
    return this.page.getByText(taskName, {
      exact: true,
    });
  }

  async verifyTaskExists(taskName: string): Promise<void> {
    await expect(this.getTask(taskName)).toBeVisible();
  }

  async verifyTaskInColumn(
    taskName: string,
    columnName: string
  ): Promise<void> {
    const column = this.page
      .locator('div.flex.flex-col.w-80')
      .filter({
        has: this.page.locator('h2', {
          hasText: columnName,
        }),
      });

    await expect(
      column.getByText(taskName, {
        exact: true,
      })
    ).toBeVisible();
  }

  async verifyTags(tags: string[]): Promise<void> {
    for (const tag of tags) {
      await expect(
        this.page.getByText(tag, {
          exact: true,
        }).first()
      ).toBeVisible();
    }
  }
}