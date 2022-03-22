import Home from '../pages/Home/Home'
import MovieDetail from '../pages/MovieDetail/MovieDetail'

const configRoute = [
    {
      path: '/',
      element: Home,
      role: ['KhachHang', 'KhachVangLai'],
    },
    {
      path: '/home',
      element: Home,
      role: ['KhachHang', 'KhachVangLai'],
    },
   
    {
      path: 'detail/:id',
      element: MovieDetail,
      role: ['KhachHang', 'KhachVangLai'],
    },
    // {
    //   path: 'ticketroom/:maLichChieu',
    //   element: MovieBooking,
    //   role: ['KhachHang', 'KhachVangLai'],
    // },
   
  ];
  export default configRoute;