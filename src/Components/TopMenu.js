import './styles/TopMenu.css';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function TopMenu() {
    
   const navigate = useNavigate();
    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="HeaderBar">
            <ul className="Items">
                <li className='Song'><Link to="/Admin"><p>SONG</p></Link></li>
                <li><Link to="/Admin/Upload"><p>UPLOAD</p></Link></li>
                <li><Link to="/Admin/Log"><p>LOG HISTORY</p></Link></li>
                <li><button onClick={handleLogout}>Đăng Xuất</button></li> 
            </ul>
        </div>
    );
}

export { TopMenu };
