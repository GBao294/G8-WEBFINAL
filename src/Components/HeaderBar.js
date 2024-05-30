import { faArrowLeft, faArrowRight, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/HeaderBar.css";
import { Money } from './MoneyDonate';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function HeaderBar({ style }) {
  const clickAvatar = () => {
    const subnav = document.getElementById("avatar-subnav");
    subnav.style.display = (subnav.style.display === "block") ? "none" : "block";
  };

  const [reloadMoney, setReloadMoney] = useState(false);
  const currentTime = new Date(); // Make sure currentTime is provided correctly

  const handleButtonClick = () => {
    setReloadMoney(!reloadMoney);
  };

  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    console.log('Money component reloaded!');
  }, [reloadMoney]);

  return (
    <div id='header-bar' style={{ backgroundImage: style }}>
      <button className="header-btn left-btn">
        <FontAwesomeIcon className='nav-btn' icon={faArrowLeft} />
      </button>

      <button className="header-btn right-btn">
        <FontAwesomeIcon className='nav-btn' icon={faArrowRight} />
      </button>

      <button onClick={clickAvatar} className="header-btn avatar-btn">
        <div className="avatar-img"></div>
        <ul id="avatar-subnav">
          <li><a href="/Profile">Tài khoản</a></li>
          <li><a href="">Hồ sơ</a></li>
          <li><a href="">Nâng cấp tài khoản</a></li>
          <li><a href="">Cài đặt</a></li>
          <li style={{ borderTop: '1px solid #383838' }}><a onClick={handleLogout} href="">Đăng xuất</a></li>
        </ul>
      </button>

      <button className="header-btn bell-btn">
        <FontAwesomeIcon className='nav-btn' icon={faBell} />
      </button>

      <button className="about-btn">
        <Link className="about-text" to="/AboutUs">About us</Link>
      </button>

      <button className="premium-btn">
        <Link className="premium-text" to="http://localhost:8888/order/create_payment_url">Donate</Link>
      </button>
      <div className="premium-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div className="money-container" onClick={handleButtonClick}>
    <Money key={reloadMoney ? 'reload' : 'normal'} currentTime={currentTime} />
  </div>
</div>
    </div>
  );
}

export { HeaderBar };

