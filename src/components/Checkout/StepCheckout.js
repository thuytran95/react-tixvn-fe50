import React, { memo } from "react";
import "./StepCheckout.scss";

const StepCheckout = () => {
  let demoImageAccount =
    "https://graph.facebook.com/1887047281446229/picture?type=square";

  return (
    <div className="StepCheckout">
      <div className="StepCheckout__step">
        <ul>
          <li className="active">
            <span>01</span>
            <span>CHỌN GHẾ & THANH TOÁN</span>
          </li>
          <li>
            <span>02</span>
            <span>KẾT QUẢ ĐẶT VÉ</span>
          </li>
        </ul>
      </div>
      <div className="StepCheckout__account">
        <p>
          <img src={demoImageAccount} alt="" />
          Long Nguyen
        </p>
      </div>
    </div>
  );
};

export default memo(StepCheckout);
