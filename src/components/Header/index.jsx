import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logos/web-logo.png";
import avatar from "../../assets/images/logos/avatar.png";
import { Link } from "react-scroll";
import $ from "jquery";
import "./style.scss";

const Header = (props) => {
  const hideModal = () => {
    $("#modalMobile").modal("hide");
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (width >= 768) {
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
        $("body").css({ padding: "0" });
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  // console.log(width);

  return (
    <header id="header">
      <div className="header">
        <Link activeClass="active" to="carousel">
          <div className="header__logo image">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <nav className="header__navbar">
          {width <= 768 ? (
            <a
              href="#modalMobile"
              className="toggle-button"
              data-toggle="modal"
            ></a>
          ) : (
            ""
          )}
          <ul className="header__nav">
            <Link
              activeClass="active"
              to="showtime"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link">Lịch chiếu</span>
            </Link>
            <Link
              activeClass="active"
              to="movie-schedule"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link">Cụm rạp</span>
            </Link>
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link">Tin tức</span>
            </Link>
            <Link
              activeClass="active"
              to="appstore"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="header__nav__link">Ứng dụng</span>
            </Link>
          </ul>
        </nav>
        <div className="header__login">
          <a href="#">
            <img src={avatar} alt="dangnhap" />
            Đăng nhập
          </a>
        </div>
      </div>
      {width <= 768 ? (
        <div
          className="modal right fade in header__mobile"
          id="modalMobile"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content customscroll">
              <div className="modal-body">
                <div className="header__mobile__login" onClick={hideModal}>
                  <a href="#">
                    <img src={avatar} alt="dangnhap" />
                    Đăng nhập
                  </a>
                </div>
                <ul className="header__mobile__list">
                  <Link
                    activeClass="active"
                    to="showtime"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={hideModal}
                  >
                    <span className="header__mobile__link">Lịch chiếu</span>
                  </Link>
                  <Link
                    activeClass="active"
                    to="movie-schedule"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={hideModal}
                  >
                    <span className="header__mobile__link">Cụm rạp</span>
                  </Link>
                  <Link
                    activeClass="active"
                    to="news"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={hideModal}
                  >
                    <span className="header__mobile__link">Tin tức</span>
                  </Link>
                  <Link
                    activeClass="active"
                    to="appstore"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={hideModal}
                  >
                    <span className="header__mobile__link">Ứng dụng</span>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
