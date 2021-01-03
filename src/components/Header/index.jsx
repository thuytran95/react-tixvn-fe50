import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/logos/web-logo.png";
import avatar from "../../assets/images/logos/avatar.png";
import changeAvatar from "../../assets/images/logos/changeAvatar.jpg";
import { NavLink, useLocation, withRouter } from "react-router-dom";
import $ from "jquery";
import { actLogout } from "../../Redux/Actions/user.action";
import { connect, useSelector } from "react-redux";
import "./style.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  // const tk = localStorage.getItem('User');
  // console.log(tk);
  const taiKhoan = user?.taiKhoan;

  const hideModal = () => {
    $("#modalMobile").modal("hide");
  };

  const location = useLocation();

  // xac dinh vi tri cua element -> scroll
  useEffect(() => {
    if (location.hash) {
      // console.log(location.hash);
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ block: "start", behavior: "smooth" });
        if (width <= 992) {
          let elementPosition =
            elem.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (width >= 992) {
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
        $("body").css({ padding: "0" });
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  console.log(width);

  return (
    <header id="header">
      <div className="header">
        <NavLink exact to="/">
          <div className="header__logo image">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>

        <nav className="header__navbar">
          {width <= 992 ? (
            <a
              href="#modalMobile"
              className="toggle-button"
              data-toggle="modal"
            ></a>
          ) : (
            ""
          )}
          <ul className="header__nav">
            <NavLink to="/#showtime">
              <span className="header__nav__link">Lịch chiếu</span>
            </NavLink>

            <NavLink to="/#movie-schedule">
              <span className="header__nav__link">Cụm rạp</span>
            </NavLink>

            <NavLink to="/#news">
              <span className="header__nav__link">Tin tức</span>
            </NavLink>

            <NavLink to="/#appstore">
              <span className="header__nav__link">Ứng dụng</span>
            </NavLink>
          </ul>
        </nav>
        <div className="header__login  show">
          <NavLink className="header__login__link" to="/login">
            <img src={user ? changeAvatar : avatar} alt="dangnhap" />
            {user ? user.taiKhoan : "Đăng nhập"}
          </NavLink>
          {user ? (
            <li
              className="header__logout"
              onClick={() => {
                props.fetchLogout(props.history);
              }}
            >
              Đăng xuất
            </li>
          ) : (
            <NavLink to="/signup" style={{ marginLeft: 5 }}>
              Đăng ký
            </NavLink>
          )}
        </div>
      </div>
      {width <= 992 ? (
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
                  <NavLink className="header__login__link" to="/login">
                    <img src={user ? changeAvatar : avatar} alt="dangnhap" />

                    {user ? user.taiKhoan : "Đăng nhập"}
                  </NavLink>
                  {user ? (
                    <li
                      className="header__logout"
                      onClick={() => {
                        props.fetchLogout(props.history);
                      }}
                    >
                      Đăng xuất
                    </li>
                  ) : (
                    <NavLink to="/signup" style={{ marginLeft: 5 }}>
                      Đăng ký
                    </NavLink>
                  )}
                </div>
                <ul className="header__mobile__list">
                  <NavLink to="/#showtime" onClick={hideModal}>
                    <span className="header__mobile__link">Lịch chiếu</span>
                  </NavLink>
                  <NavLink to="/movie-schedule-mobile" onClick={hideModal}>
                    <span className="header__mobile__link">Cụm rạp</span>
                  </NavLink>
                  <NavLink to="/#news" onClick={hideModal}>
                    <span className="header__mobile__link">Tin tức</span>
                  </NavLink>
                  <NavLink to="/#appstore" onClick={hideModal}>
                    <span className="header__mobile__link">Ứng dụng</span>
                  </NavLink>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogout: (history) => {
      dispatch(actLogout(history));
    },
  };
};

const ConnectedComponent = connect(null, mapDispatchToProps)(Header);

export default withRouter(ConnectedComponent);
