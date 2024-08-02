import test, { Page } from "@playwright/test";

import { HomePagePo } from "./pageObjects/homePage.po";

// test.use({
//   ignoreHTTPSErrors: true,
// });

const setup = async (page: Page) => {
  const homePagePo = new HomePagePo();
  await homePagePo.init(page);
  return homePagePo;
};

test("As a user, I can be greeted", async ({ page }) => {
  const homePage = await setup(page);
  await homePage.canBeGreeted();
});
