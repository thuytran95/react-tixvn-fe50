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
      maPhim: 4327,
      tenPhim: "Tiệc trăng máu",
      biDanh: "tiec-trang-mau-c18-",
      trailer: "https://youtu.be/ql5Ro6jtbII",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/tiec-trang-mau-c18-_gp05.jpg",
      moTa:
        "Trong buổi họp mặt của nhóm bạn thân, một thành viên bất ngờ đề xuất trò chơi chia sẻ điện thoại nhằm tăng tinh thần đoàn kết. Từ đó, những góc khuất của từng người dần hé lộ và khiến cho mối quan hệ vốn khắng khít của họ bắt đầu lay chuyển.",
      maNhom: "GP05",
      ngayKhoiChieu: "2020-10-23T00:00:00",
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

  const comingSoonMovieList = [
    {
      maPhim: 2850,
      tenPhim: "Goá Phụ Đen",
      biDanh: "goa-phu-den",
      trailer: "https://www.youtube.com/embed/D0sq0FqwV_E",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/goa-phu-den_gp09.jpg",
      moTa:
        "Phần phim riêng của Natasha Romanoff bất ngờ tung teaser chính thức với những cảnh hành động mãn nhãn, mang đậm chất điệp viên. Bên cạnh đó, phần phim này cũng sẽ hé lộ quá khứ đen tối và quá trình biến cô trở thành một Black Widow.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-05-02T00:00:00",
      danhGia: 7,
    },
    {
      maPhim: 2966,
      tenPhim: "Bloodshot (C18)",
      biDanh: "bloodshot-c18-",
      trailer: "https://www.youtube.com/embed/TP6MkGUZMQI",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/bloodshot-c18-_gp09.jpg",
      moTa:
        "Based on the bestselling comic book, Vin Diesel stars as Ray Garrison, a soldier recently killed in action and brought back to life as the superhero Bloodshot by the RST corporation. With an army of nanotechnology in his veins, he's an unstoppable force -- stronger than ever and able to heal instantly. But in controlling his body, the company has sway over his mind and memories, too. Now, Ray doesn't know what's real and what's not -- but he's on a mission to find out.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-10-29T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 3046,
      tenPhim: "Vì Anh Vẫn Tin",
      biDanh: "vi-anh-van-tin",
      trailer: "https://www.youtube.com/embed/OGfm7CNM5BY",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/vi-anh-van-tin_gp09.jpg",
      moTa:
        "Phim là bản tình ca ngọt ngào nhưng cũng thấm đượm nước mắt dựa trên cuốn hồi ký cùng tên của ca sĩ, nhạc sĩ người Mỹ Jeremy Camp. Phim kể về chính anh và Melissa Lynn Henning-Camp - người con gái mình yêu, người vợ và cũng là một trong những người có ảnh hưởng lớn nhất tới âm nhạc và cuộc đời của Jeremy từ lúc hai người gặp gỡ, kết hôn rồi đồng hành cùng nhau chiến đấu với căn bệnh ung thư đang dần cướp đi sinh mạng của Melissa.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-05-15T00:00:00",
      danhGia: 7,
    },
    {
      maPhim: 3047,
      tenPhim: "Nắng 3",
      biDanh: "nang-3",
      trailer: "https://www.youtube.com/embed/DymKqNH_m8w",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/nang-3_gp09.jpeg",
      moTa:
        "Phim kể về hành trình đặc biệt của Hồng Ân (Ngân Chi) cùng với người mẹ “bá đạo” Quế Phương (Khả Như) trong việc chinh phục lại ông bố Tùng Sơn (Kiều Minh Tuấn). Nhưng, đời không như là mơ, Tùng Sơn kiên quyết không nhận con và luôn tìm cách hoá giải những chiêu trò của mẹ con Quế Phương – Hồng Ân. Chưa dừng lại ở đó, sự xuất hiện chướng ngại “khó nhằn” là cô nàng “chanh xả” Thuỳ Linh (Oanh Kiều) lại càng khiến hành trình “cảm hoá” trái tim người cha của Hồng Ân trở nên rối tung.  \nRốt cuộc, mẹ con Quế Phương – Hồng Ân sẽ dùng tuyệt chiêu gì để lay động Tùng Sơn? Và sau tất cả, khi những hy vọng lẫn khát khao hạnh phúc của một đứa trẻ gửi đến một người cha có giúp Tùng Sơn học cách để trưởng thành?",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-06-13T00:00:00",
      danhGia: 7,
    },
    {
      maPhim: 3048,
      tenPhim: "Loạn Nhịp",
      biDanh: "loan-nhip",
      trailer: "https://www.youtube.com/embed/b5u8UTV0OWs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/loan-nhip_gp09.jpg",
      moTa:
        "Điển trai, độc thân và kỹ lưỡng trong lối sống, Chai là hình tượng “sugar daddy” điển hình bên ngoài ấm áp bên trong trưởng thành. Cuộc gặp gỡ vô cùng bất ngờ và định mệnh với cô gái 9x - Whan đã khiến ông chú thập niên 90s thoát ra khỏi cuộc sống đơn sắc trước đây khi cả hai chợt nhận ra rằng, trái tim họ đang ngày càng loạn nhịp vì nhau.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-05-13T00:00:00",
      danhGia: 7,
    },
    {
      maPhim: 3049,
      tenPhim: "Sát Thủ Vô Cùng Cực",
      biDanh: "sat-thu-vo-cung-cuc",
      trailer: "https://www.youtube.com/embed/9fawuOPEUMc",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/sat-thu-vo-cung-cuc_gp09.jpg",
      moTa:
        'Xoay quanh Joon, chàng cựu điệp viên của NIS, "dứt áo ra đi" khỏi tổ chức, ngày đêm cống hiến với sở thích truyện tranh. Vòng xoáy "cơm áo gạo tiền" nào phải dễ, truyện anh sáng tác, chẳng mấy ai quan tâm, cho đến khi, anh tự kể lại trải nghiệm điệp viên của mình, kể chậm rãi, từng từ một, lượt view tăng lên, nhưng kéo theo đó, là bao rắc rối ập đến khi thông tin mật đều được phơi bày.',
      maNhom: "GP09",
      ngayKhoiChieu: "2020-05-17T00:00:00",
      danhGia: 7,
    },
    {
      maPhim: 3051,
      tenPhim: "Dreamy Eyes",
      biDanh: "dreamy-eyes",
      trailer: "https://www.youtube.com/embed/KSFS0OfIK2c",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/dreamy-eyes_gp09.jpg",
      moTa:
        "Mắt biếc xoay quanh mối tình đơn phương của Ngạn với Hà Lan, cô bạn gái có cặp mắt hút hồn nhưng cá tính bướng bỉnh. Một chuyện tình nhiều cung bậc, từ ngộ nghĩnh trẻ con, rồi tình yêu thuở học trò trong sáng, trải qua bao biến cố, trở thành một cuộc “đuổi hình bắt bóng” buồn da diết nhưng không nguôi hi vọng. Câu chuyện càng trở nên éo le hơn khi Trà Long - con gái của Hà Lan, lớn lên lại nhen nhóm một tình yêu như thế với Ngạn…",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-05-19T00:00:00",
      danhGia: 8,
    },
    {
      maPhim: 3054,
      tenPhim: "Greyhound",
      biDanh: "greyhound",
      trailer: "https://www.youtube.com/embed/llr6SQpBzWs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/greyhound_gp09.jpg",
      moTa:
        "Phim lấy cảm hứng từ sự kiện lịch sử có thật - trận chiến Đại Tây Dương. Với sự góp mặt của Tom Hanks vào vai một thuyền trưởng lần đầu tiên dẫn một đoàn tàu Đồng Minh chở hàng ngàn binh lính và tiếp tế băng qua vùng biển nguy hiểm ở Trung Đại Tây Dương đến tiền tuyến của thế chiến II. Nhưng trước khi đến được đó, những kẻ thù dần xuất hiện.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-06-12T00:00:00",
      danhGia: 8,
    },
    {
      maPhim: 3056,
      tenPhim: "The King's Man",
      biDanh: "the-king-s-man",
      trailer: "https://www.youtube.com/embed/0pbLPOrTSsI",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/the-king-s-man_gp09.jpg",
      moTa:
        "Khởi Nguồn là phần tiền truyện của loạt phim Mật vụ Kingsman, xoay quanh quá trình hình thành và phát triển của tổ chức mật vụ nổi tiếng bậc nhất màn ảnh rộng này. Đứng trước một kế hoạch tiêu diệt hàng triệu người do một nhóm những bậc thầy ác nhân và bạo chúa khởi xướng; một điệp viên đầy kinh nghiệm, cùng với sự giúp đỡ của con trai và các cộng sự đáng tin cậy của mình, buộc phải chạy đua với thời gian ngăn chặn âm mưu đó.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-06-23T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 3057,
      tenPhim: "Candyman",
      biDanh: "candyman",
      trailer: "https://www.youtube.com/embed/tlwzuZ9kOQU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/candyman_gp09.jpg",
      moTa:
        "Phim xoay quanh nữ sinh Helen khi cô bắt đầu khám phá những truyền thuyết về một linh hồn ở địa phương để phục vụ bài nghiên cứu của mình. Linh hồn này vốn là con trai của một người nô lệ da màu. Khi còn sống, gã đã bị dân làng trét mật lên người và cho ong đốt đến chết vì dám đem lòng yêu một cô gái da trắng. Tên “Candyman” bắt nguồn từ truyền thuyết này.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-09-25T00:00:00",
      danhGia: 7,
    },
    {
      maPhim: 3148,
      tenPhim: "Kẻ Săn Mồi Đáy Biển",
      biDanh: "ke-san-moi-day-bien",
      trailer: "https://www.youtube.com/embed/IRnE7YLrXJI",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/ke-san-moi-day-bien_gp09.jpg",
      moTa:
        "Phim xoay quanh một nhóm kĩ sư dầu khí làm việc tại dàn khoan, trong một nhiêm vụ khắc phục sự cố tại chân của dàn khoan ở đáy biển, nhóm kĩ sư phát hiện tính mạng của bản thân bị đe doạ bởi một sinh vật bí ẩn. Sinh vật này là gì?",
      maNhom: "GP09",
      ngayKhoiChieu: "1998-09-10T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 3268,
      tenPhim: "Trận chiến Midway",
      biDanh: "tran-chien-midway",
      trailer: "https://www.youtube.com/embed/l9laReRAYFk",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/tran-chien-midway_gp09.jpg",
      moTa:
        "Vào ngày 7 tháng 12 năm 1941, quân đội Nhật Bản đã tiến hành một cuộc tấn công tàn khốc vào Trân Châu Cảng, căn cứ hải quân của Hoa Kỳ ở Hawaii. Sáu tháng sau, Trận Midway bắt đầu vào ngày 4 tháng 6 năm 1942, khi hải quân Nhật Bản một lần nữa lên kế hoạch tấn công các tàu Mỹ ở Thái Bình Dương. Trong ba ngày tiếp theo, Hải quân Hoa Kỳ và một đội phi công dũng cảm đã quyết chiến với kẻ thù trong một trong những trận chiến quan trọng và mang tính quyết định của Thế chiến II.",
      maNhom: "GP09",
      ngayKhoiChieu: "2020-05-29T00:00:00",
      danhGia: 4,
    },
  ];

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
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />

                            <span>({movie.danhGia})</span>
                          </div>
                        </div>

                        <div className="card-body showtime__card__body">
                          <div className="showtime__content showtime__content__overlay">
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

          <div
            className="tab-pane fade"
            id="comingsoon"
            role="tabpanel"
            aria-labelledby="comingsoon-tab"
          >
            <Slider
              className="showtime-slider"
              {...settings}
              nextArrow={<SlickArrowRight />}
              prevArrow={<SlickArrowLeft />}
            >
              {comingSoonMovieList.map((movie) => {
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
                        </div>

                        <div className="card-body showtime__card__body">
                          <div className="showtime__content">
                            <h4 className="card-title showtime__title text-capitalize">
                              <span className="btn-age btn-age--general">
                                P
                              </span>
                              {movie.tenPhim}
                            </h4>
                            <p className="card-text mt-2">100 phút</p>
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
