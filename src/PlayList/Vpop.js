import "../PlayList/PlayListSong.css";
import {HeaderBar} from "../Components/HeaderBar";
import {database} from "../firebase-config"
import { ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { AudioList2 } from "../Components/AudioList2";

function Vpop(){

let VpopSong = [];
const type = "Vpop";
var getMusicData = ref(database, 'SongInformation/' + 'Songs/');
onValue(getMusicData, (snapshot) =>{
  snapshot.forEach(childSnapshot => {
    let Key = childSnapshot.key;
    let data = childSnapshot.val();
    if (data.type === type ){
    VpopSong.push(
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

const BGColor = "linear-gradient(#2b410d,#11150c)";
    
    return (
        <div className="playListContainer">
            <HeaderBar style={BGColor} />
            <div style={{backgroundImage: 'linear-gradient(#2a400c,#121809)'}} className="headerContent">
               <img src="https://i.pinimg.com/236x/97/fc/7f/97fc7fd0c16d71ecf115129083d9c67d.jpg" className="headerImage"></img>
               <p className="PL">Playlist</p>
               <h1 className="PLtype">VN songs</h1>

               <ul id="dataType">
                <li className="No"><p>#</p></li>
                <li className="Name"><p>Tiêu đề</p></li>
                <li className="Artist"><p>Nghệ sĩ</p></li>
                <li className="listen"><p>Lượt nghe</p></li>
                <li className="clock"><FontAwesomeIcon icon={faClock}/></li>
               </ul>
            </div>
            <AudioList2 Songs={VpopSong} />
        </div>
    )
}
export {Vpop}
