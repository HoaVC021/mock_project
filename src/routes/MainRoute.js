import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NotFound from '../containers/Client/NotFound/NotFound';
import configRoute from '../utilities/configRoute';
import { useDispatch, useSelector } from 'react-redux';
// import { setRole } from '../containers/Auth/authSlice';
const MainRoute = () => {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  const role = 'KhachVangLai';
  // useSelector((state) => state.auth.role);
  // if (token) {
  //   dispatch(setRole(deCode(token)));
  // }
  return (
    <Routes>
      {configRoute.map((route) => {
        return (
          <Route
            key={route.path}
            path={`${route.path}/*`}
            element={
              route.role.some((item) => item === role) ? (
                <route.element />
              ) : (
                // <NotFound />
                <div>404</div>
              )
            }
          ></Route>
        );
      })}
      {/* <Route path={`*`} element={<NotFound />}></Route> */}
    </Routes>
  );
};

export default MainRoute;