import { onValue, ref } from "firebase/database";
import "./styles/Content.css"
import { database } from "../firebase-config";

function Content() {
  let Songs = [];
  
  //Lấy dữ liệu từ Database
  var getSong = ref(database, 'SongInformation/' + 'Songs/');
  onValue(getSong, (snapshot) =>{
    snapshot.forEach(childSnapshot => {
        let Key = childSnapshot.key;
        let data = childSnapshot.val();
        Songs.push(
        {
            "id": Key,
            "imgSrc": data.imgSrc,
            "songName": data.songName,
            "artist": data.artist
        });
    })
   })

    return (
      <div>
        <table id="infoTable">
        <thead>
          <tr>
            <th class="imgSrc">Ảnh</th>
            <th class="songName">Tên bài hát</th>
            <th class="artist">Nghệ sĩ</th>
          </tr>
        </thead>
        <tbody>
        {Songs && Songs.map((song, index) => (
            <tr key={index}>
              <td>
                <img className="picture" src={song?.imgSrc} alt="Ảnh" />
              </td>
              <td className="rowContent">{song?.songName}</td>
              <td className="rowContent">{song?.artist}</td>
            </tr>
          ))}
        </tbody>
       </table>
       <div className="space"></div>
      </div>
    );
}
export { Content };

