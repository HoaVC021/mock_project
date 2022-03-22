import { combineReducers } from "@reduxjs/toolkit";
import  authSlice from '../features/auth/authSlice'
import homeSlice from '../pages/Home/homeSlice'
import movieDetailSlice from '../pages/MovieDetail/movieDetailSlice'

const rootReducer = combineReducers({
    auth:authSlice,
    home:homeSlice,
    movieDetail: movieDetailSlice,
})

export default rootReducer