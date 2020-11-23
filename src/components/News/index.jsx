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
                  <div className="col-12">Hello</div>
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
