import axiosClient from './axiosClient';
// api/productApi.js

class AuthApi {
  login = (params) => {
    const url = 'api/QuanLyNguoiDung/DangNhap';
    return axiosClient.post(url, params);
  };
  register = (params) => {
    const url = 'api/QuanLyNguoiDung/DangKy';
    return axiosClient.post(url, params);
  }; 
}
const authApi = new UserApi();
export default authApi;