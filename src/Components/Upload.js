import { getAuth } from 'firebase/auth';
import { ref as dbRef, push } from 'firebase/database';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useState } from 'react';
import "./styles/Upload.css";
import { app, database } from '../firebase-config';
//import { UserContext } from './UserContext';

function Upload() {
  //const { user } = useContext(UserContext);
  const storage = getStorage(app)
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const LogDatabase = dbRef(database, 'LogHistory/Log');
  const auth = getAuth();
  const email = auth.currentUser.email;

  // Function to decode user.key into UID and role
  const decodeUserKey = (key) => {
    const decodedKey = atob(key);
    const [uid, role] = decodedKey.split('-');
    return { uid, role };
  };

  // Chọn file ảnh
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUpload = document.querySelector('.imgUpload');
      imgUpload.src = event.target.result;
    };
    if (file) {
      reader.readAsDataURL(file);
      setSelectedImage(file);
    }
  };

  // Chọn file mp3
  const handleSongUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      setSelectedSong(file);
    }
  };

  // Đăng ảnh
  const uploadIMG = () => {
    if (selectedImage) {
      const imageName = selectedImage.name;
      const storageRef = ref(storage, `IMGUS-UK/${imageName}`);
      uploadBytes(storageRef, selectedImage)
        .then(() => {
            alert("Ảnh đã được tải lên thành công!");
            getDownloadURL(storageRef)
              .then(() => {
                //Lưu hành động vào log
                const currentTime = new Date();
                const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
                const newAction = {
                  time: formattedTime,
                  action: `Đăng tải 1 ảnh lên database.`,
                  user: email,
                };
                push(LogDatabase, newAction);
              })
        })
        .catch((error) => {
          alert("Lỗi trong quá trình tải lên tệp tin:", error);
        });
    }
  };

  // Đăng bài hát
  const uploadSong = () => {
    if (selectedSong) {
      const song = selectedSong.name;
      const storageRef = ref(storage, `Music/${song}`);
      uploadBytes(storageRef, selectedSong)
        .then(() => {
            alert("Bài hát đã được tải lên thành công!");
            getDownloadURL(storageRef)
              .then(() => {
                //Lưu hành động vào log
                const currentTime = new Date();
                const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
                const newAction = {
                  time: formattedTime,
                  action: `Đăng tải 1 bài hát lên database.`,
                  user: email,
                };
                push(LogDatabase, newAction);
              })
        })
        .catch((error) => {
          alert("Lỗi trong quá trình tải lên tệp tin:", error);
        });
    }
  };

    return (
      <div id="uploadMain">
        <div className="imgContainer">
          <img className="imgUpload" alt="" />
        </div>
        <input className='imgChosen' type="file" required onChange={handleImageUpload} />
        <button className='uploadBtn' onClick={() => uploadIMG()}>UPLOAD</button>
        <p className='uploadtxt'>UPLOAD SONG</p>
        <input className='imgChosen' type="file" required onChange={handleSongUpload} />
        <button className='uploadBtn' onClick={() => uploadSong()}>UPLOAD</button>
      </div>
    );
  
}

export { Upload };

