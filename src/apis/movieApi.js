// import getToken from '../utils';
import axiosClient from './axiosClient';
// api/productApi.js

// import token from '../utils';
class MovieApi {
  //   getallUser = (token) => {
  //     const url = "/api/QuanLyNguoiDung/LayDanhSachNguoiDung";
  //     return axiosClient.get(url);
  //   };

  getTheaters = () => {
    const url = '/api/QuanLyRap/LayThongTinHeThongRap';
    return axiosClient.get(url);
  };

  getBanners = () => {
    const url = '/api/QuanLyPhim/LayDanhSachBanner';
    return axiosClient.get(url);
  };
  getMovies = (pagination) => {
    const url = `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${pagination.currentPage}&soPhanTuTrenTrang=${pagination.count}`;
    return axiosClient.get(url);
  };
   getFilm(param) {
    const url = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${param}`;
    return axiosClient.get(url);
  }
  getInfoShowTimes(param) {
    const url = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${param}`;
    return axiosClient.get(url);
  }
}
const movieApi = new MovieApi();
export default movieApi;