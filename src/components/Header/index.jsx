import React from "react";
import logo from "../../assets/images/logos/web-logo.png";
import avatar from "../../assets/images/logos/avatar.png";
import "./style.scss";

const Header = () => {
  const locationList = [
    "Hồ Chí Minh",
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
      console.log(location);
      return <li key={index}>{location}</li>;
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
          <div className="header__selected">Hồ chí minh</div>
          <ul>{renderLocation()}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
