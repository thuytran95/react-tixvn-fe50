import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logos/web-logo.png";
import "./style.scss";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, [isLoading]);

  return (
    <div className={`logo__loading ${isLoading ? "active" : ""}`}>
      <div className="logo__loading__img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loader;
