import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsDownload } from "react-icons/bs";
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaShareAlt,
  FaStepBackward,
  FaStepForward
} from "react-icons/fa";
import "../styles/MusicPlayer.css";
import { MusicContext } from "./MusicContext";



// { song, imgSrc, auto }
function MusicPlayer() {
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  const {songName,artist, songsearch, imgSrc, autoplay } = useContext(MusicContext);
  const song = songsearch; 
  const ImgSrc = imgSrc; 
  const auto = autoplay;
  const songN = songName;
  const Artist = artist;




  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);




  const testDecreaseValue = async () => {
    try {
      const response = await axios.post('http://localhost:5555/decrease-value');
      console.log(response.data);
    } catch (error) {
      console.error('Lỗi khi thử nghiệm yêu cầu POST:', error.message);
    }
  };


  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    testDecreaseValue();
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  return (
    <div className="musicPlayer">
      <img  className="songImage" src={ImgSrc} alt="" />
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <h2 className="songName">{songN}</h2>
            <h2 className="artist">{Artist}</h2>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick= 
            {
              changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
            
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>

            <i className="download">
              <BsDownload />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
