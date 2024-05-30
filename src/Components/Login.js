import React, {useState, useContext} from 'react';
import "../styles/register.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { push, ref } from 'firebase/database';
import { database, db, auth } from '../firebase-config';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const LogDatabase = ref(database, 'LogHistory/Log');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigate('/Bay');
            //Lưu hành động vào log
            const userId = userCredential.user.uid;
            const currentTime = new Date();
            const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
            const newAction = {
             time: formattedTime,
             action: `Tài khoản "${email}" đăng nhập`,
             user: "",
            };
            push(LogDatabase, newAction);
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
                    {/* <div className="background2"></div> */}
                    <div className="form-box">
                        <div className="button-box">
                            <div className="form-value">
                                <form action="" onSubmit={signIn}>
                                    <h2 className='Register-head'>Login</h2>
                                    <div className="inputbox">
                                        <ion-icon name="mail-outline"></ion-icon>
                                        <input type="email" required
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}  />
                                        <label htmlFor="">Email</label>
                                    </div>
                                    <div className="inputbox">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                        <input type="password" required
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}  />
                                        <label htmlFor="">Password</label>
                                    </div>
                                    <div className="remember">
                                        <label htmlFor=""><input type="checkbox" />Remember Me</label>
                                    </div>
                                    <button type="submit">Login</button>
                                    <div className="register">
                                        <p>Or <a href="/Register">Register</a> if you do not have an account</p>
                                    </div>
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

export  default SignIn;
