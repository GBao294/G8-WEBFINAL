import "../PlayList/PlayListSong.css";
import {HeaderBar} from "../Components/HeaderBar";
import {database} from "../firebase-config"
import { ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { AudioList2 } from "../Components/AudioList2";
import { useState } from "react";

function MyPlaylist(){

const [count, setCount] = useState(0);
let MyPLSong = [];
var getMusicData = ref(database, 'SongInformation/' + 'Songs/');
onValue(getMusicData, (snapshot) =>{
  snapshot.forEach(childSnapshot => {
    let Key = childSnapshot.key;
    let data = childSnapshot.val();
    MyPLSong.push(
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
    })
  })
})

const BGColor = "linear-gradient(#5a0a03,#290501)";
    
    return (
        <div className="playListContainer">
            <HeaderBar style={BGColor} />
            <div style={{backgroundImage: 'linear-gradient(#ac150a,#26100e)'}} className="headerContent">
               <img src="https://i.pinimg.com/236x/6b/9e/3a/6b9e3aee4752b33544ae5440d09e314c.jpg" className="headerImage"></img>
               <p className="PL">Playlist</p>
               <h1 className="PLtype">My Playlist</h1>

               <ul id="dataType">
                <li className="No"><p>#</p></li>
                <li className="Name"><p>Tiêu đề</p></li>
                <li className="Artist"><p>Nghệ sĩ</p></li>
                <li className="listen"><p>Lượt nghe</p></li>
                <li className="clock"><FontAwesomeIcon icon={faClock}/></li>
               </ul>
            </div>
            <AudioList2 Songs={MyPLSong} />
        </div>
    )
}
export {MyPlaylist}