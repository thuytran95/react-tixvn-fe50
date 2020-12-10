import React from "react";
import "./LeftCheckout.scss";

const LeftCheckout = ({image}) => {

  return (
    <div
      className="LeftCheckout"
      style={{
        backgroundImage: "url(" + image  + ")",
      }}
    >
      <div className="LeftCheckout__modalleft"></div>
    </div>
  );
};

export default LeftCheckout;
