import Database from "better-sqlite3";
import type { NextApiResponse } from "next";

import { ApiAlbumDetails } from "@/api/albumDetails/types";
import { ApiRequest } from "@/pages/api/types";
import { HTTP_STATUS } from "@/pages/api/utils/httpStatus";

import {
  MOCK_API_ALBUM_DETAILS_1,
  MOCK_API_ALBUM_DETAILS_2,
} from "../../../../mocks/albumDetails";

function retrieveDataFromDatabase() {
  // Connect to SQLite database
  const db = new Database("artists_data.db");

  // Query the database
  const rows = db.prepare("SELECT * FROM users").all();

  // Print the results
  rows.forEach((row) => {
    console.log(row);
  });

  // Close the database connection
  db.close();
}

type GetAlbumDetailsResponseBody = ApiAlbumDetails;
export default function handler(
  req: ApiRequest,
  res: NextApiResponse<GetAlbumDetailsResponseBody | null>,
) {
  retrieveDataFromDatabase();

  if (!req.query.albumId) {
    res.status(HTTP_STATUS.BAD_REQUEST).send(null);
  }
  if (req.query.albumId == "1") {
    res.status(200).json(MOCK_API_ALBUM_DETAILS_1);
  }
  if (req.query.albumId == "2") {
    res.status(200).json(MOCK_API_ALBUM_DETAILS_2);
  }

  res.status(HTTP_STATUS.TEA_POT).send(null);
}
