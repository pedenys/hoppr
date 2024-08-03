import test, { Page } from "@playwright/test";

import { fromApiAlbumDetailsToFeAlbumDetails } from "@/api/albumDetails/mappers";
import { FeAlbumDetails } from "@/types/FeAlbumDetails";

import { MOCK_API_ALBUM_DETAILS } from "../mocks/albumDetails";
import { AlbumDetailsPo } from "./pageObjects/albumDetails.po";

const expectedAlbumDetails: FeAlbumDetails =
  fromApiAlbumDetailsToFeAlbumDetails(MOCK_API_ALBUM_DETAILS);

const setup = async (page: Page) => {
  const homePagePo = new AlbumDetailsPo({
    albumDetails: expectedAlbumDetails,
  });
  await homePagePo.init(page);
  return homePagePo;
};

test("User sees albums details", async ({ page }) => {
  const albumDetailsPage = await setup(page);

  await albumDetailsPage.shouldSeeAlbumTitle();
  await albumDetailsPage.shouldSeeAlbumCover();
  await albumDetailsPage.shouldSeeAlbumMusics();
});
