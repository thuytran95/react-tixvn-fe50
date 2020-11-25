import Axios from "axios";

class MovieService {
  fetchMovieShowing() {
    return Axios({
      method: "GET",
      url:
        " https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
    });
  }
  fetchMovieUpComing() {
    return Axios({
      method: "GET",
      url:
        " https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
    });
  }

  fetchMovieDetail(id) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    });
  }
}

export default MovieService;
