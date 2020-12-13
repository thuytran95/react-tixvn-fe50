import Axios from "axios";

class MovieService {
  fetchMovieShowing() {
    return Axios({
      method: "GET",
      url:
        " https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
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
