import React from "react";
import logoDangNhap from "../../assets/images/logos/changeAvatar.jpg";
import "./style.scss";
import {
 NavLink
  } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserInfomation() {
  const user = useSelector((state) => state.user.data);
 


  return (

      <div className="use__infomation">
        <div className="row">
          <div className="col-12">
            <nav className="use__infomation__nav">
              <div className="use__infomation__nav__header">
                <img src={logoDangNhap} alt="" />

                <p>{user?.hoTen}</p>
              </div>
              <div className="use__infomation__nav__content">
      
                <NavLink activeClassName="styleNavLinkActive" className="styleNavLink" to="/user/thongtincanhan">
                  Thông tin cá nhân
                </NavLink>
                <NavLink activeClassName="styleNavLinkActive" className="styleNavLink" to="/user/thaydoimatkhau">
                Thay đổi mật khẩu
                </NavLink>
                <NavLink activeClassName="styleNavLinkActive" className="styleNavLink" to="/user/lichsudatve">
                Lịch sử đặt vé
                </NavLink>
     
                  <p>Đăng xuất</p>
           
              </div>
            </nav>
          </div>
         
        </div>
      </div>
 
  );
}
