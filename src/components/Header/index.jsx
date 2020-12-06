import React from "react";
import logo from "../../assets/images/logos/web-logo.png";
import avatar from "../../assets/images/logos/avatar.png";
import { Link } from "react-scroll";
import Scroll from "react-scroll";
import "./style.scss";

const Header = (props) => {
  return (
    <header id="header">
      <div className="header">
        <Link activeClass="active" to="carousel">
          <div className="header__logo image">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <nav className="header__navbar">
          <li href="#" className="toggle-button"></li>
          <ul className="header__nav">
            <Link
              activeClass="active"
              to="showtime"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link" href="#">
                Lịch chiếu
              </span>
            </Link>
            <Link
              activeClass="active"
              to="movie-schedule"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link" href="#">
                Cụm rạp
              </span>
            </Link>
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link" href="#">
                Tin tức
              </span>
            </Link>
            <Link
              activeClass="active"
              to="appstore"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link" href="#">
                Ứng dụng
              </span>
            </Link>
          </ul>
        </nav>
        <div className="header__login">
          <a href="#">
            <img src={avatar} alt="" />
            Đăng nhập
          </a>
        </div>
      </div>
      <div className="header__mobile">
        <div className="header__mobile__login">
          <a href="#">
            <img src={avatar} alt="" />
            Đăng nhập
          </a>
        </div>
        <ul>
          <li>
            <a className="header_mobile_navlink" href="#">
              Lịch chiếu
            </a>
          </li>
          <li>
            <a className="header_mobile_navlink" href="#">
              Cụm rạp
            </a>
          </li>
          <li>
            <a className="header_mobile_navlink" href="#">
              Tin tức
            </a>
          </li>
          <li>
            <a className="header_mobile_navlink" href="#">
              Ứng dụng
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
