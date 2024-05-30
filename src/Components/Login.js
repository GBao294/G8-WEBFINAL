import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { push, ref, getDatabase } from 'firebase/database';
import { adminAuth } from '../firebase-config';  
import { database } from '../firebase-config';
import { UserContext } from './UserContext';
import "./styles/login.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const LogDatabase = ref(database, 'LogHistory/Log');  
    const { setUser } = useContext(UserContext);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(adminAuth, email, password)  
          .then((userCredential) => {
            // Lưu hành động vào log
            const userId = userCredential.user.uid;
            const currentTime = new Date();
            const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
            const newAction = {
              time: formattedTime,
              action: `Tài khoản "${email}" đăng nhập`,
              user: userId,
            };
            push(LogDatabase, newAction);

            const userInfo = { uid: userId };
            localStorage.setItem('user', JSON.stringify(userInfo));
            setUser(userInfo); // Update user status in UserContext
            navigate('/Admin');
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
    };

    return (
        <div>
            <title>NerdyGrooves Login</title>
            <div>
                <section>
                    <div className="form-box">
                        <div className="button-box">
                            <div className="form-value">
                                <form action="" onSubmit={signIn}>
                                    <h2 className='Register-head'>Login</h2>
                                    <div className="inputbox">
                                        <ion-icon name="mail-outline"></ion-icon>
                                        <input type="email" required
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)} />
                                        <label>Email</label>
                                    </div>
                                    <div className="inputbox">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                        <input type="password" required
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)} />
                                        <label>Password</label>
                                    </div>
                                    <div className="remember">
                                        <label><input type="checkbox" />Remember Me</label>
                                    </div>
                                    <button type="submit">Login</button>
                                </form>
                                {error && <div className="error-message">{error}</div>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SignIn;
