import { expect, Page } from "@playwright/test";

import { BasePo } from "./base.po";

export class HomePagePo extends BasePo {
  async init(page: Page) {
    super.init(page);
    this.page.goto("http://localhost:3000", {
      waitUntil: "domcontentloaded",
    });

    await this.page.waitForSelector('[data-testid="home-page__title"]', {
      timeout: 10000,
    });
  }

  async canBeGreeted() {
    const greetingsHintOnPageLoad = await this.page.getByTestId(
      "home-page__greetings_hint",
    );

    expect(greetingsHintOnPageLoad).toBeVisible();
    expect(greetingsHintOnPageLoad).toHaveText("be polite");

    const greetingsTrigger = await this.page.getByTestId(
      "home-page__greetings_trigger",
    );
    await greetingsTrigger.click();
    const greetingsMessage = await this.page.getByTestId(
      "home-page__greetings_message",
    );
    expect(greetingsMessage).toBeVisible();
    expect(greetingsMessage).toHaveText(
      "Bisous sur le crâne de Édouard Cattez",
    );

    const greetingsTriggerOff = await this.page.getByTestId(
      "home-page__greetings_trigger-off",
    );
    await greetingsTriggerOff.click();
    const greetingsHint = await this.page.getByTestId(
      "home-page__greetings_hint",
    );

    expect(greetingsHint).toBeVisible();
    expect(greetingsHint).toHaveText("be polite");
  }
}
