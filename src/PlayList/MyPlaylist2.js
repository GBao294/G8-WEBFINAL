import "../PlayList/PlayListSong.css";
import {HeaderBar} from "../Components/HeaderBar";
import {database} from "../firebase-config"
import { ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { AudioList2 } from "../Components/AudioList2";
import { useState } from "react";

function MyPlaylist2(){

let PL2Song = [];
var getMusicData = ref(database, 'SongInformation/' + 'Songs/');
onValue(getMusicData, (snapshot) =>{
    snapshot.forEach(childSnapshot => {
        let Key = childSnapshot.key;
        let data = childSnapshot.val();
        if (data.type === "China" || data.type === "US-UK" ){
        PL2Song.push(
        {
          "id": Key,
          "type": data.type,
          "favourite": data.favourite,
          "songName": data.songName,
          "artist": data.artist,
          "view": data.view,
          "duration": data.duration,
          "song": data.song,
          "imgSrc": data.imgSrc,
        })};
    })
})

    return (
        <div className="playListContainer">
            <HeaderBar />
            <div style={{backgroundImage: 'linear-gradient(#70413a,#1f1614)'}} className="headerContent">
               <img src="https://i.pinimg.com/736x/6b/71/d3/6b71d3964cfdc432b9e29aac81ad93db.jpg" className="headerImage"></img>
               <p className="PL">Playlist</p>
               <h1 className="PLtype">Playlist #2</h1>

               <ul id="dataType">
                <li className="No"><p>#</p></li>
                <li className="Name"><p>Tiêu đề</p></li>
                <li className="Artist"><p>Nghệ sĩ</p></li>
                <li className="listen"><p>Lượt nghe</p></li>
                <li className="clock"><FontAwesomeIcon icon={faClock}/></li>
               </ul>
            </div>
            <AudioList2 Songs={PL2Song} />
        </div>
    )
}
export {MyPlaylist2}