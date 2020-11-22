import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowTime = () => {
  const movieList = [
    {
      maPhim: 1315,
      tenPhim: "Tedd",
      biDanh: "tedd",
      trailer: "https://www.youtube.com/embed/S3AVcCggRnU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/tedd_gp02.png",
      moTa:
        "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1330,
      tenPhim: "Trainwreck",
      biDanh: "trainwreck",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      moTa:
        "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1345,
      tenPhim: "Inside Out",
      biDanh: "inside-out",
      trailer: "https://www.youtube.com/embed/seMwpP0yeu4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
      moTa:
        "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1360,
      tenPhim: "Home",
      biDanh: "home",
      trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
      moTa:
        "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1375,
      tenPhim: "Batman v Superman: Dawn of Justice",
      biDanh: "batman-v-superman-dawn-of-justice",
      trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      moTa:
        "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1450,
      tenPhim: "True Detective",
      biDanh: "true-detective",
      trailer: "https://www.youtube.com/embed/TXwCoNwBSkQ",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/truedetective.jpg",
      moTa:
        "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1465,
      tenPhim: "The Longest Ride",
      biDanh: "the-longest-ride",
      trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
      moTa:
        "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1435,
      tenPhim: "Mad Max: Fury Road",
      biDanh: "mad-max-fury-road",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/madmax.jpg",
      moTa:
        "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1480,
      tenPhim: "The Walking Dead",
      biDanh: "the-walking-dead",
      trailer: "https://www.youtube.com/embed/R1v0uFms68U",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
      moTa:
        "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1495,
      tenPhim: "Southpaw",
      biDanh: "southpaw",
      trailer: "https://www.youtube.com/embed/Mh2ebPxhoLs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/southpaw.jpg",
      moTa:
        "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1510,
      tenPhim: "Specter",
      biDanh: "specter",
      trailer: "https://www.youtube.com/embed/LTDaET-JweU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/spectre.jpg",
      moTa:
        "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1525,
      tenPhim: "Avengers: Infinity War ",
      biDanh: "avengers-infinity-war",
      trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
      moTa:
        "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1540,
      tenPhim: "truedetective",
      biDanh: "truedetective",
      trailer: "https://www.youtube.com/watch?v=tSoy8TpUt20",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/truedetective_gp02.png",
      moTa:
        "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 4125,
      tenPhim: "Ròm",
      biDanh: "rom",
      trailer: "https://www.youtube.com/watch?v=XRm1P7oGpMQ",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/rom_gp02.jpg",
      moTa:
        "Lấy bối cảnh từ một khu chung cư cũ đang chờ giải tỏa tại Sài Gòn, Ròm kể câu chuyện về cuộc sống của những người dân lao động nơi đây. Họ đều chơi số đề với hy vọng kiếm được một khoản tiền lớn để đổi đời. Ròm là cậu bé làm “cò đề” để kiếm sống qua ngày, chuyên tư vấn cho người dân những con số may mắn để họ có cơ may trúng đề. Một hôm cậu giúp bà già kia trúng đề lớn nên được mọi người tin tưởng nhưng sau nhiều lần thua cậu bị người dân mất tin tưởng",
      maNhom: "GP02",
      ngayKhoiChieu: "2020-10-11T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 4684,
      tenPhim: "Em Chua 19",
      biDanh: "em-chua-19",
      trailer: "https://www.youtube.com/watch?v=ZM719KtmKzs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/em-chua-19_gp02.jpg",
      moTa: "asdasdasd",
      maNhom: "GP02",
      ngayKhoiChieu: "2020-11-18T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 4695,
      tenPhim: "Righ6",
      biDanh: "righ6",
      trailer: "https://www.youtube.com/watch?v=ZM719KtmKzs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/righ6_gp02.jpg",
      moTa: "king of rap 123",
      maNhom: "GP02",
      ngayKhoiChieu: "2020-12-04T00:00:00",
      danhGia: 10,
    },
  ];
  console.log(movieList);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <span {...props} className="slick-prev slick-arrow showtime-arrow">
      <i className="fa fa-angle-left"></i>
    </span>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <span {...props} className="slick-next slick-arrow showtime-arrow">
      <i className="fa fa-angle-right"></i>
    </span>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };

  return (
    <section id="showtime">
      <div className="container">
        <ul className="nav nav-tabs" id="showstime-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="showing-tab"
              data-toggle="tab"
              href="#showing"
              role="tab"
              aria-controls="showing"
              aria-selected="true"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="comingsoon-tab"
              data-toggle="tab"
              href="#comingsoon"
              role="tab"
              aria-controls="comingsoon"
              aria-selected="false"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="showtime-content">
          <div
            className="tab-pane fade active show"
            id="showing"
            role="tabpanel"
            aria-labelledby="showing-tab"
          >
            <Slider
              className="showtime-slider"
              {...settings}
              nextArrow={<SlickArrowRight />}
              prevArrow={<SlickArrowLeft />}
            >
              {movieList.map(function (movie) {
                return (
                  <React.Fragment key={movie.maPhim}>
                    <div className="col" key={movie.maPhim}>
                      <div className="card showtime__card">
                        <div
                          className="showtime__image"
                          style={{
                            backgroundImage: `url('${movie.hinhAnh}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="showtime__overlay">
                            <div className="btn-play">
                              <a href="#">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="showtime__rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>({movie.danhGia})</span>
                          </div>
                        </div>

                        <div className="card-body showtime__card__body">
                          <div className="showtime__content">
                            <h4 className="card-title showtime__title text-capitalize">
                              <span className="btn-age">C16</span>
                              {movie.tenPhim}
                            </h4>
                            <p className="card-text mt-2">100 phút</p>
                          </div>
                          <div className="showtime__addToCart">
                            <a href="#" className="btn-default">
                              Mua vé
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowTime;
