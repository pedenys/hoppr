import { NextPage } from "next";
import { useRouter } from "next/router";

import { useGetAlbumDetails } from "@/api/albumDetails/queries";
import { MusicListItem } from "@/components/AlbumDetails/MusicListItem";

import styles from "./styles.module.css";

const AlbumDetailsPage: NextPage = () => {
  const { query } = useRouter();

  const id = query?.id as string;
  const {
    data: albumDetails,
    isLoading,
    isError,
  } = useGetAlbumDetails({ albumId: id });

  if (isLoading) {
    return <p role='status'>Loading…</p>;
  }

  if (isError) {
    return <p role='status'>Something bad happened 🤔</p>;
  }

  return (
    <>
      <h1 className={styles.title} data-testid='album-details__title'>
        {albumDetails?.title}
      </h1>
      <div className={styles.albumDetailsContainer}>
        <img
          data-testid='albums-details__album_cover'
          src={albumDetails?.cover}
          alt={""}
          className={styles.cover}
        />

        <div data-testid='albums-details__musics_container'>
          {albumDetails?.musics?.map((music) => (
            <MusicListItem
              key={music.id + music.title + albumDetails.title}
              id={music.id}
              isFavorite={music.isFavorite}
              playContentUrl={music.playMusicUrl}
              title={music.title}
              artist={albumDetails.artist}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AlbumDetailsPage;
