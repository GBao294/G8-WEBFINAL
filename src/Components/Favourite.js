import React, { useEffect, useState,  useContext } from "react";
import { FaHeadphones, FaRegClock, FaUsers } from "react-icons/fa";
import "../styles/LeftMenu.css";
import { Songs } from "./Songs";
import { MusicContext } from './MusicContext';
import { HeaderSong } from "./HeaderSong";
import { HeaderBar } from "./HeaderBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ref, update } from "firebase/database";
import { database } from "../firebase-config";

function Favourite() {
    const { song } = useContext(MusicContext);
    const favouriteSongs = song.filter(song => song.favourite);
    const { setMainSong } = useContext(MusicContext);


    useEffect(() => {
        const allLi = document.querySelector(".menuList").querySelectorAll("li");
    
        function changePopularActive() {
          allLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        allLi.forEach((n) => n.addEventListener("click", changePopularActive));
      }, []);

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
    <div className="mainContainer">
      <HeaderBar />
      <HeaderSong />
      <div className="menuList">
        <ul>
          <li>
            <Link to="/Bay">Popular</Link>
          </li>
          <li>
            <Link to="/Favourite">Favourite</Link>
          </li>
        </ul>

        <p>
          <i><FaUsers /></i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <div className="AudioList">
        <h2 className="title">
        Favourite Songs: <span>{favouriteSongs.length} songs</span>
        </h2>
      <div className="songsContainer">
        {favouriteSongs &&
          favouriteSongs.map((song, index) => (
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
                      <i>
                        <FaRegClock />
                      </i>
                      {song?.duration}
                    </p>

                    

                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
    
  );
}
export  {Favourite} ;