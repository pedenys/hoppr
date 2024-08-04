import { expect, Page } from "@playwright/test";

import { FeAlbumDetails } from "@/types/FeAlbumDetails";

import { BasePo } from "./base.po";

export class AlbumDetailsPo extends BasePo {
  private _expectedAlbumDetails: FeAlbumDetails;

  constructor({ albumDetails }: { albumDetails: FeAlbumDetails }) {
    super();
    this._expectedAlbumDetails = albumDetails;
  }

  async init(page: Page) {
    super.init(page);
    await this.page.goto("http://localhost:3000/albumDetails/1", {
      waitUntil: "domcontentloaded",
    });

    await this.page.waitForSelector('[data-testid="album-details__title"]', {
      timeout: 3000,
    });
  }

  private async _getAlbumMusics() {
    const albumsMusicsContainer = await this.page.getByTestId(
      "albums-details__musics_container",
    );
    const albumMusics = await albumsMusicsContainer.getByRole("listitem");
    return albumMusics;
  }

  async shouldSeeAlbumTitle() {
    const albumTitle = await this.page.getByTestId("album-details__title");

    await expect(albumTitle).toBeVisible();
    await expect(albumTitle).toHaveText(this._expectedAlbumDetails.title);
  }

  async shouldSeeAlbumCover() {
    const albumCover = await this.page.getByTestId(
      "albums-details__album_cover",
    );

    await expect(albumCover).toBeVisible();
    await expect(albumCover).toHaveAttribute(
      "src",
      this._expectedAlbumDetails.cover,
    );
  }

  async shouldSeeAlbumMusics() {
    const albumMusics = await this._getAlbumMusics();

    await expect(albumMusics).toHaveText(
      this._expectedAlbumDetails.musics.map((music) => music.title),
    );
  }

  private async _shouldSeeAlbumMusicFavoriteStatus() {
    const albumMusics = await this._getAlbumMusics();

    // expect album musics to have correct favorite display
  }
}
