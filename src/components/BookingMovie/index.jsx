import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const BookingMovie = () => {
  const [isActive, setIsActive] = useState(false);
  const [checked, setChecked] = useState({
    id: null,
    name: "movie",
    lableTag: "Phim",
  });

  const movieList = [
    {
      maPhim: 1323,
      tenPhim: "What's wrong with secretary kim",
      biDanh: "what-s-wrong-with-secretary-kim",
      trailer: "https://www.youtube.com/embed/-ir2IflOHv4",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/what-s-wrong-with-secretary-kim_gp10.jpg",
      moTa:
        "What's Wrong with Secretary Kim? is a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, which was then serialized into a comic in 2015 via KakaoPage. The series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes. ",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-06-16T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1338,
      tenPhim: "Fight for my way",
      biDanh: "fight-for-my-way",
      trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
      moTa:
        "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-09-17T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1353,
      tenPhim: "Bloodshot",
      biDanh: "bloodshot",
      trailer: "https://www.youtube.com/embed/vOUVVDWdXbo",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
      moTa:
        "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce.",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-08-21T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1368,
      tenPhim: "Annabelle",
      biDanh: "annabelle",
      trailer: "https://www.youtube.com/embed/EMa-KFfatT0",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
      moTa:
        "là một bộ phim kinh dị siêu nhiên của Mỹ năm 2019 do Gary Dauberman đạo diễn, trong tác phẩm đầu tay của ông, từ kịch bản của Dauberman và một câu chuyện của Dauberman và James Wan , người cũng đóng vai trò là nhà sản xuất với Peter Safra",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-04-25T00:00:00",
      danhGia: 8,
    },
    {
      maPhim: 1383,
      tenPhim: "Avenger",
      biDanh: "avenger",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
      moTa:
        " The versions of the film shows in AMC Theaters as part of a Avengers Marvel Phase One marathon features an exclusive intro from Agent Coulson, talking about the film and the character. These Coulson intros were later includes as bonuses in the Avengers Phase One box set. ",
      maNhom: "GP10",
      ngayKhoiChieu: "2020-07-21T00:00:00",
      danhGia: 10,
    },
  ];

  return (
    <div className="container">
      <div id="booking__movie">
        <div className="booking__movie">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="booking__movie__item booking__movie__name dropdown">
                <div
                  className={`options-container customscroll ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setIsActive(false)}
                >
                  {movieList.map((item) => {
                    return (
                      <div
                        className="option"
                        onClick={() =>
                          setChecked({
                            id: item.maPhim,
                            lableTag: item.tenPhim,
                          })
                        }
                      >
                        <input
                          type="radio"
                          className="radio"
                          id={item.maPhim}
                          name="movie"
                        />
                        <label htmlFor={item.maPhim}>{item.tenPhim}</label>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="selected"
                  onClick={() => setIsActive(!isActive)}
                >
                  {checked.lableTag.length < 45
                    ? checked.lableTag
                    : checked.lableTag.substring(0, 45)}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__cimena dropdown">
                <div
                  className="dropdown__selected"
                  onClick={() => {
                    if (checked.id) {
                      console.log("active run");
                    } else {
                      console.log("not active");
                    }
                  }}
                >
                  Rạp
                </div>
                <ul className="dropdown__menu customscroll"></ul>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__datepick dropdown">
                <div className="dropdown__selected">Ngày xem</div>
                <ul className="dropdown__menu customscroll"></ul>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__showtimes dropdown">
                <div className="dropdown__selected">Suất chiếu</div>
                <ul className="dropdown__menu customscroll"></ul>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__book dropdown">
                <input
                  className="btn-default"
                  type="button"
                  defaultValue="Mua vé ngay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingMovie;
