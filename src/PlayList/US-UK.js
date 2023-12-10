import "../PlayList/PlayListSong.css";
import {HeaderBar} from "../Components/HeaderBar";
import {database} from "../firebase-config"
import { ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { AudioList2 } from "../Components/AudioList2";
import { Songs } from "../Components/Songs";

function US_UK(){

let UsUkSong = [];
const type = "US-UK";
var getMusicData = ref(database, 'SongInformation/' + 'Songs/');
onValue(getMusicData, (snapshot) =>{
  snapshot.forEach(childSnapshot => {
    let Key = childSnapshot.key;
    let data = childSnapshot.val();
    if (data.type === type ){
    UsUkSong.push(
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

const BGColor = "linear-gradient(#012437,#052a3d)";
    
    return (
        <div className="playListContainer">
            <HeaderBar style={BGColor} />
            <div style={{backgroundImage: 'linear-gradient(#023049,#111315)'}} className="headerContent">
               <img src="https://i.pinimg.com/236x/4c/26/2a/4c262a1622ffe6a48d6575aabf17c61a.jpg" className="headerImage"></img>
               <p className="PL">Playlist</p>
               <h1 className="PLtype">US-UK music</h1>

               <ul id="dataType">
                <li className="No"><p>#</p></li>
                <li className="Name"><p>Tiêu đề</p></li>
                <li className="Artist"><p>Nghệ sĩ</p></li>
                <li className="listen"><p>Lượt nghe</p></li>
                <li className="clock"><FontAwesomeIcon icon={faClock}/></li>
               </ul>
            </div>
            <AudioList2 Songs={UsUkSong} />
        </div>
    )
}
export {US_UK}