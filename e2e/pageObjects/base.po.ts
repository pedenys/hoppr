import { Page } from "@playwright/test";

export class BasePo {
  get page(): Page {
    if (!this._page) throw new Error("Page is not initialized");
    return this._page;
  }

  private _page?: Page;

  init(page: Page) {
    this._page = page;
  }
}
