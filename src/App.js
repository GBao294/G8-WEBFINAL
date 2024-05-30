import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import SignIn from './Components/Login';
import { TopMenu } from './Components/TopMenu';
import { Content } from './Components/Content';
import { Log } from './Components/Log';
import { Upload } from './Components/Upload';
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

````````<Route path="/Admin" element={
            <>
            <div>
            <ProtectedRoute>
              <TopMenu />
              <Content />
            </ProtectedRoute>
            </div>
            </>
        }/>

        <Route path="/Admin/Upload" element={
            <>
            <div>
            <ProtectedRoute>
              <TopMenu />
              <Upload />
            </ProtectedRoute>
            </div>
            </>
        }/>

        <Route path="/Admin/Log" element={
            <>
            <div>
            <ProtectedRoute>
              <TopMenu />
              <Log />
            </ProtectedRoute>
            </div>
            </>
        }/>
        
        </Routes>
    </div>
  );
}

export default App;
