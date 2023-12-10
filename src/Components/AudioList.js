import React, { useEffect, useState,  useContext } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import { Songs } from "./Songs";
import { MusicContext } from './MusicContext';
import { ref, update } from "firebase/database";
import { database } from "../firebase-config";

function AudioList({Songs}) {
  const [songs, setSongs] = useState(Songs);
  const { song, toggleFavourite } = useContext(MusicContext);
  const { setMainSong } = useContext(MusicContext);

  useEffect(() => 
  {
    const allSongs = document.querySelectorAll(".songs");
    
    function changeActive() 
    {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);


  return (
    <div className="AudioList">
      <div className="songsContainer">
        {song &&
          song.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>

              <div className="song">
                <div 
                className="imgBox"
                onClick={() => setMainSong(song?.song, song?.imgSrc, song?.songName, song?.artist)}
                >
                  <img src={song?.imgSrc} alt="" />
                </div>

                <div className="section">
                  <p 
                  className="songName"
                  onClick={() => setMainSong(song?.song, song?.imgSrc, song?.songName, song?.artist)}
                  >
                    {song?.songName}{" "}
                    <span className="songSpan">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      {song?.view}
                    </p>

                    <p className="duration">
                      {song?.duration}
                    </p>

                    <div
                      className="favourite"
                      onClick={() => toggleFavourite(song?.id)}
                    >
                      {song?.favourite ? (<i><FaHeart /></i>) : (<i><FaRegHeart /></i>)}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export  {AudioList} ;