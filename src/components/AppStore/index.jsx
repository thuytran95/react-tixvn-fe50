import React from "react";
import mobileImage from "../../assets/images/appstore/mobile.png";
import dataImage from "../../assets/data/appstore.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.appstore.scss";

function AppStore() {
  const imageList = dataImage;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <section id="appstore">
      <div className="container-fluid">
        <div className="appstore">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="appstore__content">
                <p className="appstore__textlarge">
                  Ứng dụng tiện lợi dành cho
                </p>
                <p className="appstore__textlarge">người yêu điện ảnh</p>
                <p className="appstore__textsmall">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <button className="btn-default">
                  App miễn phí - Tải về ngay!
                </button>
                <p>
                  TIX có hai phiên bản
                  <a className="link-app" href="#">
                    iOS
                  </a>
                  &amp;
                  <a className="link-app" href="#">
                    Android
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 right">
              <img
                className="img-responsive phone-img"
                src={mobileImage}
                alt="Loading..."
              />
              <Slider
                id="appstore-slider"
                className="appstore-slider"
                {...settings}
              >
                {imageList.map((item, index) => {
                  return (
                    <React.Fragment key={index} style={{ width: 195 }} s>
                      <div
                        className="col-12 slider"
                        style={{
                          backgroundImage: `url('./images/appstore/${item.name}')`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          height: "100vh",
                        }}
                      ></div>
                    </React.Fragment>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppStore;
