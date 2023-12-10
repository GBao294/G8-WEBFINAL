import { database } from "../firebase-config";
import { ref, onValue } from "firebase/database";

let Songs = [];
// Lấy dữ liệu từ realtime database 
var getMusicData = ref(database, 'SongInformation/' + 'Songs/');
onValue(getMusicData, (snapshot) =>{
  snapshot.forEach(childSnapshot => {
    let Key = childSnapshot.key;
    let data = childSnapshot.val();
    Songs.push(
    {
      "id": Key,
      "favourite": data.favourite,
      "songName": data.songName,
      "artist": data.artist,
      "view": data.view,
      "duration": data.duration,
      "song": data.song,
      "imgSrc": data.imgSrc,
    });
  })
})

export {Songs};