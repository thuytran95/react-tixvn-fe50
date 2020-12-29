import React from "react";
import { useSelector } from "react-redux";
import InfomationUserBg from "../../assets/images/userinfomation/thongtinnguoidung.jpg";
import "./style.scss";
export default function InfomationUser() {
    const {hoTen,taiKhoan,soDT,email}= useSelector((state) => state?.user?.data) || "";
  return (
    <div className="information__user">
    
     <div className="information__user__content">
     <h1 className="information__user__content__tittle">Thông tin cá nhân</h1>
     <form className="information__user__content__form">
        <div className="form-group row">
          <label  className="col-sm-3 col-form-label">
            Họ tên :
          </label>
          <div className="col-sm-9 information__user__content__form__input">
            <input
              type="text"
              className="form-control"
                value={hoTen || ""}
                disabled="disabled"
            />
          </div>
        </div>
        <div className="form-group row ">
          <label  className="col-sm-3 col-form-label">
            Tài khoản :
          </label>
          <div className="col-sm-9 information__user__content__form__input">
            <input
              type="text"
              className="form-control"
              value={taiKhoan|| ""}
              disabled
            />
          </div>
        </div>
        <div className="form-group row">
          <label  className="col-sm-3 col-form-label">
            Sđt :
          </label>
          <div className="col-sm-9 information__user__content__form__input">
            <input
              type="text"
              className="form-control"
              value={soDT|| ""}
              disabled
            />
          </div>
        </div>
        <div className="form-group row">
          <label  className="col-sm-3 col-form-label">
            Email :
          </label>
          <div className="col-sm-9 information__user__content__form__input">
            <input
              type="text"
              className="form-control"
              value={email|| ""}
              disabled
            />
          </div>
        </div>
      

        <button
     
          className="btn btn-success d-none"
        >
          Cập nhập tài khoản
        </button>
      </form>
  
     </div>
   
     </div>
  );
}
