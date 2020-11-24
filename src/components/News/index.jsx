import React from "react";
import data from "../../assets/data/news.data.json";
import "./style.scss";

const News = () => {
  const newsTabList = data;
  console.log(newsTabList);
  return (
    <section className="news-section" id="news">
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
              className={
                index === 0 ? "tab-pane fade active show" : "tab-pane fade"
              }
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              key={tab.id}
            >
              <div className="container">
                <div className="row">
                  {tab.newsList.map((newsItem, index1) => {
                    // console.log(newsItem.smallNewList);
                    if (!newsItem.smallNewList) {
                      return (
                        <div
                          className="col-news col-xs-12 news"
                          key={`${tab.id}-${index1}`}
                        >
                          <div className="news__image">
                            <a href="#">
                              <img
                                alt="news"
                                src={`./images/news/${tab.nameTab}/${newsItem.image}`}
                              />
                            </a>
                          </div>
                          <a className="news__link" href="#">
                            <p className="news__link__title">
                              {newsItem.title}
                            </p>
                          </a>
                          <p className="news__description">
                            {newsItem.description}
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div
                        className="col-news col-xs-12 news"
                        key={`${tab.id}-${index1}`}
                      >
                        <div className="row">
                          {newsItem.smallNewList.map((smallNew, index2) => {
                            return (
                              <div
                                className="col-xs-12 col-sm-12"
                                key={`${tab.id}-${index1}-${index2}`}
                              >
                                <div className="news__image">
                                  <a href="#">
                                    <img
                                      alt="news"
                                      src={`./images/news/${tab.nameTab}/${smallNew.image}`}
                                    />
                                  </a>
                                </div>
                                <a className="news__link" href="#">
                                  <p className="news__link__title">
                                    {smallNew.title}
                                  </p>
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
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
