import React from "react";
import logo from "../../assets/images/logos/web-logo.png";
import avatar from "../../assets/images/logos/avatar.png";
import "./style.scss";

const Header = () => {
  const locationList = [
    "Hà Nội",
    "Đà Nẵng",
    "Hải Phòng",
    "Biên Hoà",
    "Nha Trang",
    "Bình Dương",
    "Phan Thiết",
    "Hạ Long",
    "Cần Thơ",
    "Vũng Tàu",
    "Quy Nhơn",
    "Huế",
    "Long Xuyên",
    "Thái Nguyên",
    "Buôn Ma Thuột",
    "Bắc Giang",
    "Bến Tre",
    "Việt Trì",
    "Ninh Bình",
    "Thái Bình",
    "Vinh",
    "Bảo Lộc",
    "Đà Lạt",
    "Trà Vinh",
    "Yên Bái",
    "Kiên Giang",
    "Vĩnh Long",
    "Cà Mau",
    "Hậu Giang",
    "Tây Ninh",
    "Tuyên Quang",
    "Thanh Hóa",
    "Nam Định",
    "Hải Dương",
    "Gia Lai",
    "Hà Tĩnh",
    "Phú Yên",
    "Bạc Liêu",
    "Long An",
    "Đồng Hới",
    "Hà Nam",
    "Bắc Ninh",
    "Quảng Trị",
    "Kon Tum",
    "Sóc Trăng",
    "Sơn La",
    "Lạng Sơn",
    "Quảng Ngãi",
    "Mỹ Tho",
    "Đồng Tháp",
    "Hưng Yên",
  ];
  console.log(locationList);

  const renderLocation = () =>
    locationList.map((location, index) => {
      return (
        <div className="header__location__option">
          <input type="radio" className="radio" id={index} name="category" />
          <label htmlFor={index}>{location}</label>
        </div>
      );
    });
  // console.log(renderLocation());
  return (
    <header id="header">
      <div className="header">
        <div className="header__logo image">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header__navbar">
          <ul className="header__nav">
            <li>
              <a className="header__nav__link" href="#">
                Lịch chiếu
              </a>
            </li>
            <li>
              <a className="header__nav__link" href="#">
                Cụm rạp
              </a>
            </li>
            <li>
              <a className="header__nav__link" href="#">
                Tin tức
              </a>
            </li>
            <li>
              <a className="header__nav__link" href="#">
                Ứng dụng
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__login">
          <a href="#">
            <img src={avatar} alt="" />
            Đăng nhập
          </a>
        </div>
        <div className="header__location">
          <div className="header__location__container">
            {renderLocation()}
            <div className="header__selected">Hồ Chí Minh</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
