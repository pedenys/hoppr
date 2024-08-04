import test, { Page } from "@playwright/test";

import { fromApiAlbumDetailsToFeAlbumDetails } from "@/api/albumDetails/mappers";
import { FeAlbumDetails } from "@/types/FeAlbumDetails";

import { MOCK_API_ALBUM_DETAILS_1 } from "../mocks/albumDetails";
import { AlbumDetailsPo } from "./pageObjects/albumDetails.po";

const expectedAlbumDetails: FeAlbumDetails =
  fromApiAlbumDetailsToFeAlbumDetails(MOCK_API_ALBUM_DETAILS_1);

const setup = async (page: Page) => {
  const albumDetailsPo = new AlbumDetailsPo({
    albumDetails: expectedAlbumDetails,
  });
  await page.route("*/**/api/albumDetails/1", async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify(MOCK_API_ALBUM_DETAILS_1),
    });
  });

  await albumDetailsPo.init(page);

  return albumDetailsPo;
};

test("User sees albums details", async ({ page }) => {
  const albumDetailsPage = await setup(page);

  await albumDetailsPage.shouldSeeAlbumTitle();
  await albumDetailsPage.shouldSeeAlbumCover();
  await albumDetailsPage.shouldSeeAlbumMusics();
});
