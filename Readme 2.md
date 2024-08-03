# Liste des features

- listing des musiques par album
- mettre en favoris une ou plusieurs musiques d'un album

- écouter une musique : - Lien / Fichier

# Prérequis

- Next.JS
- Tests de comportement

# Fichiers mis a disposition

- Fichier de données : data.csv (id, album, artiste, titres, lien youtube, fichier mp3)
- Fichier MP3 / Liens youtube

##

## Objets

Album
Artist
Music

```ts
type Music = {
  id: string;
  title: string;
  isFavorite: boolean;
  url: string;
};

type Album = {
  id: string;
  name: string;
  illustration: string;
  musics: Array<Music>;
  artists: Array<Artist>;
};

type Artist = {
  id: string;
  illustration: string;
  name: string;
};
```

Artist -> Albums
Album -> Musics
Musics -> Album
Music

## Actions

Albums :

- listing des albums et de leurs musiques associées

Music

- mettre en favori Music (€ Album)
- écouter
