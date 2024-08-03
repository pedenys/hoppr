type ApiAlbumDetailsArtist = {
  Artist_ID: number;
  Artist_Name: string;
};
type ApiAlbumDetailsMusic = {
  Music_ID: number;
  Music_Title: string;
  Music_Url: string;
};

export type ApiAlbumDetails = {
  Artists: Array<ApiAlbumDetailsArtist>;
  Album_ID: number;
  Album_Title: string;
  Album_Cover: string;
  Musics: Array<ApiAlbumDetailsMusic>;
};
