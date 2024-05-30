import "../styles/ResetPW.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const ResetPW = () => {
    const [email, setEmail] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(email !== null){
        sendPasswordResetEmail(auth, email).then(data =>{
            alert("Kiểm tra đường liên kết từ gmail của bạn!")
            navigate("/");

        }).catch(error => { alert(error.code) })
        }
    }

    return (
        <div className="resetContainer">
            <title>Đặt lại mật khẩu</title>
            <form className="resetMain" onSubmit={handleSubmit}>
                <h1 className="resetTilte">Đặt lại mật khẩu</h1>
                <p className="content">Nhập địa chỉ email mà bạn dùng để đăng ký tài khoản, sau đó, chúng tôi sẽ gửi cho bạn một đường liên kết để lấy lại quyền truy cập vào tài khoản.</p>
                <p>Địa chỉ email của bạn</p>
                <input name ="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" className="resetBtn">Gửi đường liên kết</button>
            </form>    
        </div>
    )
}
export {ResetPW}