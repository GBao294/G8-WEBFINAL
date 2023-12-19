import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../styles/contentv2.css';
import '../styles/style.css';
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      birthdate: '',
      imageUrl: 'https://daohieu.com/wp-content/uploads/2020/05/con-tho-trang-co-mat-do-scaled.jpg',
      description: '',
    };
  }

  saveData = () => {
    const { name, gender, birthdate, description } = this.state;
    alert(`Đã lưu thông tin:\nTên: ${name}\nGiới tính: ${gender}\nNgày sinh: ${birthdate}\nMiêu tả: ${description}`);
  };
  

  showPopup = () => {
    document.getElementById('uploadPopup').style.display = 'block';
  };

  closePopup = () => {
    document.getElementById('uploadPopup').style.display = 'none';
  };

  updateImage = () => {
    const imageUrl = document.getElementById('imageLink').value;
    this.setState({ imageUrl });
    this.closePopup();
  };

  render() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif !important' }}>
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#333333' }}>
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="navlink" href="Bay" style={{ color: 'rgb(255, 255, 255)' }}>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            
            </ul>
          </div>
        </nav>
        <div className="row-padding">
          <div className="third" style={{ fontSize: '20px' }}>
            <FontAwesomeIcon icon={faUser} />
            TÀI KHOẢN
            <div className="input-container">
              <label htmlFor="name">Tên:</label>
              <input type="text" id="name" name="name" placeholder="Nhập tên của bạn..." onChange={(e) => this.setState({ name: e.target.value })} />
              <br />

              <label htmlFor="gender">Giới tính:</label>
              <input type="text" id="gender" name="gender" placeholder="Nhập giới tính..." onChange={(e) => this.setState({ gender: e.target.value })} />
              <br />

              <label htmlFor="birthdate">Ngày sinh:</label>
              <input type="text" id="birthdate" name="birthdate" placeholder="Nhập ngày sinh..." onChange={(e) => this.setState({ birthdate: e.target.value })} />
              <br />

              <button onClick={this.saveData}>Save</button>
            </div>
          </div>
          <div className="twothird backgroundblue ">
            <div className="circle" onClick={this.showPopup}>
              <img id="profileImage" src={this.state.imageUrl} alt="Profile" />
            </div>

            <div id="uploadPopup" className="popup">
              <label htmlFor="imageLink">Nhập đường link hình ảnh:</label>
              <input type="text" id="imageLink" name="imageLink" />
              <button onClick={this.updateImage}>Update</button>
              <button onClick={this.closePopup}>Close</button>
            </div>

            <h2 className="blue-text" style={{ fontSize: '20px', textAlign: 'center' }}>
              <b>Hoàng Gia Bảo</b>
            </h2>
            <h3 className="blue-text" style={{ fontSize: '20px', textAlign: 'center' }}>
              <b>Lập trình viên Frontend</b>
            </h3>

            <table className="table table-primary" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', fontSize: '16px' }}>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <b>Ngày sinh</b>
                  </td>

                  <td>29/04/2003</td>
                </tr>
                <tr>
                  <td>
                    <b>Giới tính</b>
                  </td>
                  <td>Nam</td>
                </tr>
                <tr>
                  <td>
                    <b>Nơi sinh</b>
                  </td>
                  <td>Đồng Nai</td>
                </tr>
              </tbody>
            </table>
            <div className="introduce">
              <h2 className="blue-text" style={{ fontSize: '20px' }}>
                <b>MIÊU TẢ</b>
              </h2>
              <textarea
                id="description"
                rows="4"
                cols="50"
                placeholder="Nhập miêu tả của bạn..."
                onChange={(e) => this.setState({ description: e.target.value })}
              ></textarea>
              <h2 className="blue-text" style={{ fontSize: '20px' }}>
                <b>LIÊN HỆ</b>
              </h2>
              <ul>
                <li>
                  <b>ĐT: </b>
                  <u>0374910317</u>
                </li>
                <li>
                  <b>Email: </b>
                  <u>21521848@gm.uit.edu.vn</u>
                </li>
                <li>
                  <b>FB: </b>
                  <u>
                    <a href="https://www.facebook.com">Bảo Hoàng Gia</a>
                  </u>
                </li>
                Cảm ơn vì đã đến
                <br />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
