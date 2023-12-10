import React, { useState, createContext } from 'react';
import { Songs } from './Songs';
import { ref, update } from "firebase/database";
import { database } from "../firebase-config";

export const MusicContext = createContext()

export const MusicProvider = ({ children }) => {
  const [songsearch, setSong] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const [songName, setSongName] = useState(null);
  const [artist, setArtist] = useState(null);
  const [song, setSongfav] = useState(Songs);

  const setMainSong = (songSrc, imgSrc, songName, artist) => {
    setSong(songSrc);
    setImgSrc(imgSrc);
    setSongName(songName);
    setArtist(artist);
    setAutoplay(true);
  };

  const toggleFavourite = (id) => {
    setSongfav((prevSongs) => {
      const updatedSongs = prevSongs.map(song => 
        song.id === id ? { ...song, favourite: !song.favourite } : song
      );

      const updatedSong = updatedSongs.find(song => song.id === id);

      if (updatedSong) {
        const songRef = ref(database, `SongInformation/Songs/${id}`);
        update(songRef, { favourite: updatedSong.favourite })
          .then(() => console.log('Favourite status updated in Firebase!'))
          .catch((error) => console.error('Error updating Firebase: ', error));
      }

      return updatedSongs;
    });
  };

  return (
    <MusicContext.Provider value={{ songName, artist, songsearch, imgSrc, autoplay, setMainSong, song, toggleFavourite }}>
      {children}
    </MusicContext.Provider>
  );
};