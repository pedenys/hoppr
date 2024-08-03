import { ApiAlbumDetails } from "@/api/albumDetails/types";

export const MOCK_API_ALBUM_DETAILS: ApiAlbumDetails = {
  Artists: [
    {
      Artist_ID: 1,
      Artist_Name: "Mock Api Album Details Artist 1",
    },
  ],
  Album_Cover:
    "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=600",
  Album_ID: 1,
  Album_Title: "Mock Api Album Details Title",
  Musics: [
    {
      Music_ID: 1,
      Music_Title: "Mock Api Album Details Music Title 1",
      Music_Url: "https://www.youtube.com/watch?v=wfGuSP7PvW4",
    },
    {
      Music_ID: 2,
      Music_Title: "Mock Api Album Details Music Title 2",
      Music_Url: "https://www.youtube.com/watch?v=wfGuSP7PvW4",
    },
    {
      Music_ID: 3,
      Music_Title: "Mock Api Album Details Music Title 3",
      Music_Url: "https://www.youtube.com/watch?v=wfGuSP7PvW4",
    },
    {
      Music_ID: 4,
      Music_Title: "Mock Api Album Details Music Title 4",
      Music_Url: "https://www.youtube.com/watch?v=wfGuSP7PvW4",
    },
  ],
};
