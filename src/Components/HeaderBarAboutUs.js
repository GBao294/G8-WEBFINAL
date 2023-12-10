import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import "../styles/HeaderBar.css"

function HeaderBarAboutUs({style}){
    const clickAvatar = () =>{
        const subnav = document.getElementById("avatar-subnav")
        subnav.style.display = (subnav.style.display === "block")?"none":"block"
    }
    
    return(
        <div id='header-bar' style={{backgroundImage: {style}}}>

                <button onClick={clickAvatar} className="header-btn avatar-btn">
                    <div className="avatar-img"></div>
                    <ul id="avatar-subnav">
                        <li><a href="">Tài khoản</a></li>
                        <li><a href="">Hồ sơ</a></li>
                        <li><a href="">Nâng cấp tài khoản</a></li>
                        <li><a href="">Cài đặt</a></li>
                        <li style={{ borderTop: '1px solid #383838' }}><a href="">Đăng xuất</a></li>
                    </ul>
                </button>
                
                <button className="header-btn bell-btn">
                    <FontAwesomeIcon className='nav-btn' icon={faBell} />
                </button>

                <button className="about-btn">
                   <Link className="about-text" to="/Bay">Home</Link>
                </button>

                <button className="premium-btn" style={{backgroundColor: "#0f7249"}}>
                <Link className="premium-text" style={{color: "#fff"}} to="http://localhost:8888/order/create_payment_url">Donate</Link>
                </button>
            </div>
    )
};

export { HeaderBarAboutUs }
