import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { AboutUs } from "./Components/AboutUs";
import { Favourite } from './Components/Favourite';
import { HeaderBarAboutUs } from './Components/HeaderBarAboutUs';
import { LeftMenu } from "./Components/LeftMenu";
import SignIn from './Components/Login';
import { MainContainer } from "./Components/MainContainer";
import { MusicProvider } from './Components/MusicContext';
import MusicPlayer from './Components/MusicPlayer';
import { Register } from './Components/Register';
import { MyPlaylist } from './PlayList/MyPlaylist';
import { MyPlaylist2 } from './PlayList/MyPlaylist2';
import { US_UK } from './PlayList/US-UK';
import { Vpop } from './PlayList/Vpop';
import { TopMenu } from './Admin/TopMenu';
import { Content } from './Admin/Content';
import { Log } from './Admin/Log';
import { Upload } from './Admin/Upload';
import { ResetPW } from './Components/ResetPW';
import ProtectedRoute from './Components/ProtectedRoute';
function Navigation() {
  return (
    <div>
    <ul>
     
      {/* <li><Link to="/">Home</Link></li>
      <li><a href="/Bay">Bay</a></li> */}
    </ul>
    </div>
  );
}

function App() {
  // const navigate = useNavigate();
  const [showText, setShowText] = useState(true);
  const BGColor = "linear-gradient(#012437,#052a3d)";

  useEffect(() => {
    // Check the current route and update state accordingly
    setShowText(window.location.pathname === '/');
  }, []);

  return (
    <div className="">
      {showText && <Navigation />}

   

      <Routes>
        <Route path="/" element={
          <>
             <div className="background"></div>
            <SignIn />
          </>
        } />

        <Route path="/Register" element={
          <>
             <div className="background"></div>
            <Register/>
          </>
        } />

        <Route path="/Bay" element={
          <>
          {/* <div className="background"></div> */}
          <div className="App">
          <ProtectedRoute>
            <MusicProvider>
              <LeftMenu />
              <MainContainer />
              <MusicPlayer/>
            </MusicProvider>
          </ProtectedRoute>
          </div>
         
          </>
        } />
        
         <Route path="/AboutUs" element={
          <>
          <ProtectedRoute>
              <HeaderBarAboutUs style={BGColor} />
              <AboutUs />
          </ProtectedRoute>
          </>
        } />
        
        <Route path="/UsUkMusic" element={
          <>
          <div className="App">
          <ProtectedRoute>
            <MusicProvider>
              <LeftMenu />
              <US_UK />
              <MusicPlayer/>
            </MusicProvider>
          </ProtectedRoute>
          </div>
          </>
        } />
        
        <Route path="/Vpop" element={
          <>
          <div className="App">
          <ProtectedRoute>
            <MusicProvider>
              <LeftMenu />
              <Vpop/>
              <MusicPlayer/>
            </MusicProvider>
          </ProtectedRoute>
          </div>
          </>
        } />

        <Route path="/myPlaylist" element={
          <>
          <div className="App">
          <ProtectedRoute>
            <MusicProvider>
              <LeftMenu />
              <MyPlaylist />
              <MusicPlayer/>
            </MusicProvider>
          </ProtectedRoute>
          </div>
          </>
        } />

        <Route path="/Playlist2" element={
          <>
          <div className="App">
          <ProtectedRoute>
            <MusicProvider>
              <LeftMenu />
              <MyPlaylist2 />
              <MusicPlayer/>
            </MusicProvider>
          </ProtectedRoute>
          </div>
          </>
        } />
        <Route path="/Favourite" element={
          <>
          <div className="App">
          <ProtectedRoute>
              <MusicProvider>
                <LeftMenu />
                <Favourite />
                <MusicPlayer/>
              </MusicProvider>
            </ProtectedRoute>
            </div>
          </> 
        } />

        <Route path="/ResetPassword" element={
            <>
            <ResetPW />
            </>
        }/>
        
        </Routes>
    </div>
  );
}

export default App;
