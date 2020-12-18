import React from "react";
import "./style.scss";

function LoginPage() {
  return (
    <div id="login">
      <div className="login login--customize">
        <div className="login__wrapper">
          <img className="login__logo" src="../images/logos/group@2x.png" />
          <div className="login__message">
            Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
          </div>
          <form action="" className="mt-5">
            <div className="form-group text-left">
              <label>Email:</label>
              <input className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group text-left">
              <label>Password:</label>
              <input className="form-control" placeholder="Enter password" />
            </div>
            <button className="btn btn-success mt-3">Đăng ký</button>
          </form>
          <div className="login__close">
            <i className="fa fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
