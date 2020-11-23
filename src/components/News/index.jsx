import React from "react";
import data from "../../assets/data/news.data.json";

const News = () => {
  const newsTabList = data;
  console.log(newsTabList);
  return (
    <section className="news" id="news">
      <ul className="nav nav-tabs hotnews__tab" id="hotnews-tab" role="tablist">
        <li className="nav-item hotnews__tab__item">
          <a
            className="hotnews__tab__link nav-link active"
            id="dien-anh-tab"
            data-toggle="tab"
            href="#dien-anh"
            role="tab"
            aria-controls="dien-anh"
            aria-selected="true"
          >
            Điện Ảnh 24h
          </a>
        </li>
        <li className="nav-item hotnews__tab__item">
          <a
            className="hotnews__tab__link nav-link"
            id="review-tab"
            data-toggle="tab"
            href="#review"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </a>
        </li>
        <li className="nav-item hotnews__tab__item">
          <a
            className="hotnews__tab__link nav-link"
            id="khuyen-mai-tab"
            data-toggle="tab"
            href="#khuyen-mai"
            role="tab"
            aria-controls="khuyen-mai"
            aria-selected="false"
          >
            Khuyễn Mãi
          </a>
        </li>
      </ul>
      <div className="tab-content" id="news-tab-content">
        {newsTabList.map((tab, index) => {
          return (
            <div
              className="tab-pane fade active show"
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              <div className="container">
                <div className="row">
                  {tab.newsList.map((newItem, index) => {
                    if (index < 2) {
                      return (
                        <div className="col-12 col-sm-6">
                          <div class="hotnews__item">
                            <div class="hotnews__item__img">
                              <a href="#">
                                <img src="./images/news/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.jpg" />{" "}
                              </a>
                            </div>
                            <div class="hotnews__item__content">
                              <p class="news-title">
                                <a href="#">
                                  Dàn mỹ nhân trong thế giới điện ảnh của quái
                                  kiệt Christopher Nolan
                                </a>
                              </p>
                              <p class="news-description">
                                Làng phim đương đại những năm qua chứng kiến sự
                                lên ngôi của cái tên Christopher Nolan, được
                                biết tới như một trong những đạo diễn thiên tài
                                với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.
                              </p>
                            </div>
                            <div class="social">
                              <div class="social-icon social__like">
                                <img src="./images/icons/like.png" />{" "}
                                <span>0</span>
                              </div>
                              <div class="social-icon socail__comments">
                                <img src="./images/icons/comment.png" />{" "}
                                <span>0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (index < 4) {
                      return (
                        <div className="col-12 col-sm-4">
                          <div>
                            <div className="hotnews__item">
                              <div className="hotnews__item__img">
                                <a href="#">
                                  <img src="./images/news/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023653637.jpg" />{" "}
                                </a>
                              </div>
                              <div className="hotnews__item__content">
                                <p className="news-title">
                                  <a href="#">
                                    6 đạo diễn tỉ đô làm nên thành công của
                                    những bom tấn đình đám nhất Hollywood
                                  </a>
                                </p>
                                <p className="news-description">
                                  Hollywood luôn yêu thích những dự án điện ảnh
                                  với tiềm năng trở thành bom tấn. Trên con
                                  đường đó, đạo diễn là một trong những vị trí
                                  quan trọng nhất
                                </p>
                              </div>
                            </div>
                            <div className="social">
                              <div className="social-icon social__like">
                                <img src="./images/icons/like.png" />
                                <span>0</span>
                              </div>
                              <div className="social-icon socail__comments">
                                <img src="./images/icons/comment.png" />
                                <span>0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
