import React from "react";
import "./style.scss";

const MovieSchedule = () => {
  // cum rap
  const theaters = [
    {
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      biDanh: "bhd-star-cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      maHeThongRap: "CGV",
      tenHeThongRap: "cgv",
      biDanh: "cgv",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      maHeThongRap: "CineStar",
      tenHeThongRap: "CineStar",
      biDanh: "cinestar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      maHeThongRap: "Galaxy",
      tenHeThongRap: "Galaxy Cinema",
      biDanh: "galaxy-cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      maHeThongRap: "LotteCinima",
      tenHeThongRap: "Lotte Cinema",
      biDanh: "lotte-cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      maHeThongRap: "MegaGS",
      tenHeThongRap: "MegaGS",
      biDanh: "megags",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ];

  const theaterSystem = [
    {
      maCumRap: "bhd-star-cineplex-3-2",
      tenCumRap: "BHD Star Cineplex - 3/2",
      diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
      danhSachRap: [
        {
          maRap: 451,
          tenRap: "Rạp 1",
        },
        {
          maRap: 452,
          tenRap: "Rạp 2",
        },
        {
          maRap: 453,
          tenRap: "Rạp 3",
        },
        {
          maRap: 454,
          tenRap: "Rạp 4",
        },
        {
          maRap: 455,
          tenRap: "Rạp 5",
        },
        {
          maRap: 456,
          tenRap: "Rạp 6",
        },
        {
          maRap: 457,
          tenRap: "Rạp 7",
        },
        {
          maRap: 458,
          tenRap: "Rạp 8",
        },
        {
          maRap: 459,
          tenRap: "Rạp 9",
        },
        {
          maRap: 460,
          tenRap: "Rạp 10",
        },
      ],
    },
    {
      maCumRap: "bhd-star-cineplex-bitexco",
      tenCumRap: "BHD Star Cineplex - Bitexco",
      diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
      danhSachRap: [
        {
          maRap: 461,
          tenRap: "Rạp 1",
        },
        {
          maRap: 462,
          tenRap: "Rạp 2",
        },
        {
          maRap: 463,
          tenRap: "Rạp 3",
        },
        {
          maRap: 464,
          tenRap: "Rạp 4",
        },
        {
          maRap: 465,
          tenRap: "Rạp 5",
        },
        {
          maRap: 466,
          tenRap: "Rạp 6",
        },
        {
          maRap: 467,
          tenRap: "Rạp 7",
        },
        {
          maRap: 468,
          tenRap: "Rạp 8",
        },
        {
          maRap: 469,
          tenRap: "Rạp 9",
        },
        {
          maRap: 470,
          tenRap: "Rạp 10",
        },
      ],
    },
    {
      maCumRap: "bhd-star-cineplex-pham-hung",
      tenCumRap: "BHD Star Cineplex - Phạm Hùng",
      diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
      danhSachRap: [
        {
          maRap: 471,
          tenRap: "Rạp 1",
        },
        {
          maRap: 472,
          tenRap: "Rạp 2",
        },
        {
          maRap: 473,
          tenRap: "Rạp 3",
        },
        {
          maRap: 474,
          tenRap: "Rạp 4",
        },
        {
          maRap: 475,
          tenRap: "Rạp 5",
        },
        {
          maRap: 476,
          tenRap: "Rạp 6",
        },
        {
          maRap: 477,
          tenRap: "Rạp 7",
        },
        {
          maRap: 478,
          tenRap: "Rạp 8",
        },
        {
          maRap: 479,
          tenRap: "Rạp 9",
        },
        {
          maRap: 480,
          tenRap: "Rạp 10",
        },
      ],
    },
    {
      maCumRap: "bhd-star-cineplex-vincom-le-van-viet",
      tenCumRap: "BHD Star Cineplex - Vincom Lê Văn Việt",
      diaChi: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
      danhSachRap: [
        {
          maRap: 481,
          tenRap: "Rạp 1",
        },
        {
          maRap: 482,
          tenRap: "Rạp 2",
        },
        {
          maRap: 483,
          tenRap: "Rạp 3",
        },
        {
          maRap: 484,
          tenRap: "Rạp 4",
        },
        {
          maRap: 485,
          tenRap: "Rạp 5",
        },
        {
          maRap: 486,
          tenRap: "Rạp 6",
        },
        {
          maRap: 487,
          tenRap: "Rạp 7",
        },
        {
          maRap: 488,
          tenRap: "Rạp 8",
        },
        {
          maRap: 489,
          tenRap: "Rạp 9",
        },
        {
          maRap: 490,
          tenRap: "Rạp 10",
        },
      ],
    },
    {
      maCumRap: "bhd-star-cineplex-vincom-quang-trung",
      tenCumRap: "BHD Star Cineplex - Vincom Quang Trung",
      diaChi: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
      danhSachRap: [
        {
          maRap: 491,
          tenRap: "Rạp 1",
        },
        {
          maRap: 492,
          tenRap: "Rạp 2",
        },
        {
          maRap: 493,
          tenRap: "Rạp 3",
        },
        {
          maRap: 494,
          tenRap: "Rạp 4",
        },
        {
          maRap: 495,
          tenRap: "Rạp 5",
        },
        {
          maRap: 496,
          tenRap: "Rạp 6",
        },
        {
          maRap: 497,
          tenRap: "Rạp 7",
        },
        {
          maRap: 498,
          tenRap: "Rạp 8",
        },
        {
          maRap: 499,
          tenRap: "Rạp 9",
        },
        {
          maRap: 500,
          tenRap: "Rạp 10",
        },
      ],
    },
    {
      maCumRap: "bhd-star-cineplex-vincom-thao-dien",
      tenCumRap: "BHD Star Cineplex - Vincom Thảo Điền",
      diaChi: "L5-Megamall, 159 XL Hà Nội, Q.2",
      danhSachRap: [
        {
          maRap: 501,
          tenRap: "Rạp 1",
        },
        {
          maRap: 502,
          tenRap: "Rạp 2",
        },
        {
          maRap: 503,
          tenRap: "Rạp 3",
        },
        {
          maRap: 504,
          tenRap: "Rạp 4",
        },
        {
          maRap: 505,
          tenRap: "Rạp 5",
        },
        {
          maRap: 506,
          tenRap: "Rạp 6",
        },
        {
          maRap: 507,
          tenRap: "Rạp 7",
        },
        {
          maRap: 508,
          tenRap: "Rạp 8",
        },
        {
          maRap: 509,
          tenRap: "Rạp 9",
        },
        {
          maRap: 510,
          tenRap: "Rạp 10",
        },
      ],
    },
  ];

  return (
    <div id="movie-schedule">
      <div className="container backgroundTop">
        <div className="row">
          <ul
            className="nav-tabs customscroll movie-schedule__tab col-12 col-sm-2"
            id="movie-schedule-tab"
            role="tablist"
          >
            {theaters.map((item, index) => {
              return (
                <li
                  key={item.maHeThongRap}
                  className="nav-item movie-schedule__tab__item"
                >
                  <a
                    className={`movie-schedule__tab__link nav-link ${
                      index === 0 ? "active" : ""
                    }`}
                    id={`${item.biDanh}-tab`}
                    data-toggle="tab"
                    href={`#${item.biDanh}`}
                    role="tab"
                    aria-controls={item.biDanh}
                    aria-selected="true"
                  >
                    <img src={item.logo} alt={item.biDanh} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className="tab-content movie-schedule__tab__child col-12 col-sm-10"
            id="movie-schedule-tab-content"
          >
            <div className="row">
              <div
                className="tab-pane movie-schedule__child customscroll col-12 col-sm-2 fade active show"
                id="cgv-aeon-tan-phu"
                role="tabpanel"
                aria-labelledby="cgv-aeon-tan-phu-tab"
              >
                <ul
                  className="nav-tabs movie-schedule__child__tab"
                  id="movie-schedule-child-tab"
                  role="tablist"
                >
                  <li id={2} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link active"
                      id="cgv-aeon-tan-phu-tab"
                      data-toggle="tab"
                      href="#cgv-aeon-tan-phu"
                      role="tab"
                      aria-controls="cgv-aeon-tan-phu"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Aeon Tân Phú"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Aeon Tân Phú</div>
                        <div className="desc">
                          Lầu 3, Aeon Mall 30 Bờ Bao Tân Thắng, P. Sơn Kỳ, Quận
                          Tân Phú
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={3} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-crescent-mall-tab"
                      data-toggle="tab"
                      href="#cgv-crescent-mall"
                      role="tab"
                      aria-controls="cgv-crescent-mall"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Crescent Mall"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Crescent Mall</div>
                        <div className="desc">
                          Lầu 5, Crescent Mall Đại lộ Nguyễn Văn Linh, Phú Mỹ
                          Hưng, Quận 7
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={4} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-giga-mall-thu-duc-tab"
                      data-toggle="tab"
                      href="#cgv-giga-mall-thu-duc"
                      role="tab"
                      aria-controls="cgv-giga-mall-thu-duc"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Giga Mall Thủ Đức"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Giga Mall Thủ Đức</div>
                        <div className="desc">
                          Tầng 6 TTTM GIGAMALL, 240-242 Phạm Văn Đồng, P. Hiệp
                          Bình Chánh, Q. Thủ Đức
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={5} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-hoang-van-thu-tab"
                      data-toggle="tab"
                      href="#cgv-hoang-van-thu"
                      role="tab"
                      aria-controls="cgv-hoang-van-thu"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Hoàng Văn Thụ"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Hoàng Văn Thụ</div>
                        <div className="desc">
                          Tầng 1 và 2, Gala Center, số 415, Hoàng Văn Thụ,
                          Phường 2, Quận Tân Bình
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={6} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-hung-vuong-plaza-tab"
                      data-toggle="tab"
                      href="#cgv-hung-vuong-plaza"
                      role="tab"
                      aria-controls="cgv-hung-vuong-plaza"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Hùng Vương Plaza"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Hùng Vương Plaza</div>
                        <div className="desc">
                          Tầng 7 | Hùng Vương Plaza 126 Hùng Vương, Quận 5
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={7} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-imc-tran-quang-khai-tab"
                      data-toggle="tab"
                      href="#cgv-imc-tran-quang-khai"
                      role="tab"
                      aria-controls="cgv-imc-tran-quang-khai"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV IMC Trần Quang Khải"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV IMC Trần Quang Khải</div>
                        <div className="desc">
                          Tầng 2 &amp; 3, Trung Tâm Văn Hóa Đa Năng, 62 Trần
                          Quang Khải, P. Tân Định, Q. 1
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={8} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-cgv-ly-chinh-thang-tab"
                      data-toggle="tab"
                      href="#cgv-cgv-ly-chinh-thang"
                      role="tab"
                      aria-controls="cgv-cgv-ly-chinh-thang"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Lý Chính Thắng"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Lý Chính Thắng</div>
                        <div className="desc">
                          Tầng 3, 83 Lý Chính Thắng, Phường 8, Q.3
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={9} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-pandora-city-tab"
                      data-toggle="tab"
                      href="#cgv-pandora-city"
                      role="tab"
                      aria-controls="cgv-pandora-city"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Pandora City"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Pandora City</div>
                        <div className="desc">
                          Lầu 3, Pandora City 1/1 Trường Chinh, Quận Tân Phú
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={10} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-pearl-plaza-tab"
                      data-toggle="tab"
                      href="#cgv-pearl-plaza"
                      role="tab"
                      aria-controls="cgv-pearl-plaza"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Pearl Plaza"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Pearl Plaza</div>
                        <div className="desc">
                          Tầng 5, Pearl Plaza, 561A Điện Biên Phủ, P.25, Q.Bình
                          Thạnh
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={11} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-saigonres-nguyen-xi-tab"
                      data-toggle="tab"
                      href="#cgv-saigonres-nguyen-xi"
                      role="tab"
                      aria-controls="cgv-saigonres-nguyen-xi"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Saigonres Nguyễn Xí"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Saigonres Nguyễn Xí</div>
                        <div className="desc">
                          Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q
                          Bình Thạnh
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={12} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-satra-cu-chi-tab"
                      data-toggle="tab"
                      href="#cgv-satra-cu-chi"
                      role="tab"
                      aria-controls="cgv-satra-cu-chi"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Satra Củ Chi"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Satra Củ Chi</div>
                        <div className="desc">
                          Tầng 3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp
                          Thạnh An, Xã Trung An, Huyện Củ Chi
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={13} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-su-van-hanh-tab"
                      data-toggle="tab"
                      href="#cgv-su-van-hanh"
                      role="tab"
                      aria-controls="cgv-su-van-hanh"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Sư Vạn Hạnh"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Sư Vạn Hạnh</div>
                        <div className="desc">
                          Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận
                          10
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={14} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-thao-dien-pearl-tab"
                      data-toggle="tab"
                      href="#cgv-thao-dien-pearl"
                      role="tab"
                      aria-controls="cgv-thao-dien-pearl"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Thảo Điền Pearl"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Thảo Điền Pearl</div>
                        <div className="desc">
                          Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Phường Thảo
                          Điền, Quận 2
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={15} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-truong-son-tab"
                      data-toggle="tab"
                      href="#cgv-truong-son"
                      role="tab"
                      aria-controls="cgv-truong-son"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Trường Sơn (CGV CT Plaza)"
                        />
                      </div>
                      <div className="content">
                        <div className="title">
                          CGV Trường Sơn (CGV CT Plaza)
                        </div>
                        <div className="desc">
                          Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, P.2,
                          Q. Tân Bình
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={16} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-vincom-center-landmark-81-tab"
                      data-toggle="tab"
                      href="#cgv-vincom-center-landmark-81"
                      role="tab"
                      aria-controls="cgv-vincom-center-landmark-81"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Vincom Center Landmark 81"
                        />
                      </div>
                      <div className="content">
                        <div className="title">
                          CGV Vincom Center Landmark 81
                        </div>
                        <div className="desc">
                          Tầng B1 , TTTM Vincom Center Landmark 81, 772 Điện
                          Biên Phủ, P.22, Q. Bình Thạnh
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={17} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-vincom-go-vap-tab"
                      data-toggle="tab"
                      href="#cgv-vincom-go-vap"
                      role="tab"
                      aria-controls="cgv-vincom-go-vap"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Vincom Gò Vấp"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Vincom Gò Vấp</div>
                        <div className="desc">
                          Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị,
                          Phường 7, Quận Gò Vấp
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={18} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-vincom-thu-duc-tab"
                      data-toggle="tab"
                      href="#cgv-vincom-thu-duc"
                      role="tab"
                      aria-controls="cgv-vincom-thu-duc"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Vincom Thủ Đức"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Vincom Thủ Đức</div>
                        <div className="desc">
                          Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, Phường
                          Bình Thọ, Quận Thủ Đức
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={19} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-vincom-dong-khoi-tab"
                      data-toggle="tab"
                      href="#cgv-vincom-dong-khoi"
                      role="tab"
                      aria-controls="cgv-vincom-dong-khoi"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Vincom Đồng Khởi"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Vincom Đồng Khởi</div>
                        <div className="desc">
                          Tầng 3, TTTM Vincom Center Đồng Khởi, 72 Lê Thánh Tôn
                          &amp; 45A Lý Tự Trọng, Quận 1
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={20} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-vivo-city-tab"
                      data-toggle="tab"
                      href="#cgv-vivo-city"
                      role="tab"
                      aria-controls="cgv-vivo-city"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Vivo City"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Vivo City</div>
                        <div className="desc">
                          Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn
                          Văn Linh, Quận 7
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={41} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-liberty-citypoint-tab"
                      data-toggle="tab"
                      href="#cgv-liberty-citypoint"
                      role="tab"
                      aria-controls="cgv-liberty-citypoint"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Liberty Citypoint"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Liberty Citypoint</div>
                        <div className="desc">
                          Tầng M - 1, khách sạn Liberty Center Saigon Citypoint,
                          59 - 61 Pasteur, Quận 1
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                  <li id={42} className="nav-item movie-schedule__child__item">
                    <a
                      className="movie-schedule__child__link nav-link"
                      id="cgv-aeon-binh-tan-tab"
                      data-toggle="tab"
                      href="#cgv-aeon-binh-tan"
                      role="tab"
                      aria-controls="cgv-aeon-binh-tan"
                      aria-selected="true"
                    >
                      <div className="image">
                        <img
                          src="./images/movie-schedule/cgv-general.jpg"
                          alt="CGV Aeon Bình Tân"
                        />
                      </div>
                      <div className="content">
                        <div className="title">CGV Aeon Bình Tân</div>
                        <div className="desc">
                          Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1
                          đường số 17A, khu phố 11, phường Bình Trị Đông B, quận
                          Bình Tân
                        </div>
                        <input
                          className="btn-detail"
                          type="button"
                          defaultValue="[Chi tiết]"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-content movie-schedule__content customscroll col-12 col-sm-10"
                id="movie-schedule-content"
              >
                <div
                  className="tab-pane fade active show"
                  id="cgv-crescent-mall"
                  role="tabpanel"
                  aria-labelledby="cgv-crescent-mall-tab"
                >
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/danh-cap-giac-mo-inception-14794516242347_60x60.jpg"
                        alt="Đánh Cắp Giấc Mơ - Inception"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Đánh Cắp Giấc Mơ -
                        Inception
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/diep-vien-sieu-lay-my-spy-p-15959969936666_60x60.jpg"
                        alt="Điệp Viên Siêu Lầy - My Spy"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Điệp Viên Siêu Lầy -
                        My Spy
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/ca-sau-tu-than-black-water-abyss-c18-15964423012362_60x60.jpg"
                        alt="Cá Sấu Tử Thần - Black Water: Abyss"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Cá Sấu Tử Thần -
                        Black Water: Abyss
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/ham-quy-behind-you-c18-15976394035712_60x60.jpg"
                        alt="Hầm Quỷ - Behind You"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Hầm Quỷ - Behind You
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSchedule;
