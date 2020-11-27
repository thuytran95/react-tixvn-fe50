import React from "react";
import logo from "../../assets/images/logos/web-logo.png";
import avatar from "../../assets/images/logos/avatar.png";
import "./style.scss";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
