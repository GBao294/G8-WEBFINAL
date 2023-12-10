import React, { useState, useEffect, useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import GroupLogo from '../img/logo.png';
import "../styles/LeftMenu.css";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import { Songs } from "./Songs";
import { MusicContext } from './MusicContext';

function LeftMenu() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setMainSong } = useContext(MusicContext);

  useEffect(() => {
    const filteredResults = searchText === ""
      ? []
      : Songs.filter(song =>
          song.songName.toLowerCase().includes(searchText.toLowerCase())
        );

    setSearchResults(filteredResults);
  }, [searchText]);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
        <img src={GroupLogo} alt="BigCo Inc. logo" style={{ width: '40px', height: '40px' }} />


          <h2>NerdyGroove</h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>

      <Menu listObject={MenuList} />

      <div className="searchBox">
        <i> <BiSearchAlt /> </i>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="searchResult">
        {searchResults.map((result) => (
          <a key={result.id} href={`#${result.id}`} className="card" onClick={() => setMainSong(result.song, result.imgSrc, result.songName, result.artist)}>
            <img src={result.imgSrc} alt={result.songName} />
            <p>{result.songName}</p>
          </a>
        ))}
      </div>
      
      <MenuPlayList />
    </div>
  );
}

export { LeftMenu };
