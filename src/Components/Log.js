import { database } from "../firebase-config";
import { onValue, ref } from "firebase/database";
import "./styles/Log.css";

function Log() {
    let logs = [];

    //Lấy dữ liệu từ Log database
    var getLog = ref(database, 'LogHistory/Log');
    onValue(getLog, (snapshot) =>{
    snapshot.forEach(childSnapshot => {
        let data = childSnapshot.val();
        logs.push(
        {
          "time": data.time,
          "action": data.action,
          "user": data.user
        });
    })
   })

   return (
    <div>
      <table id="infoTable">
      <thead>
        <tr>
          <th class="time">Thời gian</th>
          <th class="action">Hành động</th>
          <th class="user">Người thực hiện</th>
        </tr>
      </thead>
      <tbody>
      {logs && logs.map((log, index) => (
          <tr key={index}>
            <td className="timeRow">{log?.time}</td>
            <td className="actionRow">{log?.action}</td>
            <td className="userRow">{log?.user}</td>
          </tr>
        ))}
      </tbody>
     </table>
     <div className="space"></div>
    </div>
  );

}

export{Log}