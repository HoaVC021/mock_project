import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../apis/axiosClient";

const initialState = {
    currentUser: {},
    token: '',
    role: '',
    isLoading: false
  };

const loginAsync = createAsyncThunk('auth/login', async(body) =>{
    const res = await axiosClient.post(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
        body
      );
    return res.data;
})

export const signUpAsync = createAsyncThunk('auth/signup', async (body) => {
    const res = await axiosClient.post(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      body
    );
    return res;
  });
  

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout(state, action) {
            state.role = 'KhachVangLai';
            state.token = '';
            state.currentUser = {};
          },
    },
    extraReducers: {
        [loginAsync.pending]: (state) => {
          state.isLoading = true;
        },
    
        [loginAsync.fulfilled]: (state, action) => {
          console.log(action.payload);
          state.currentUser = action.payload;
          state.token = action.payload.accessToken;
          state.isLoading = false;
        },
        [loginAsync.rejected]: (state, action) => {
          state.isLoading = false;
          state.errors = 'Something went wrong! 😩';
        },
        [signUpAsync.pending]: (state) => {
          state.isLoading = true;
        },
        [signUpAsync.fulfilled]: (state, action) => {
          state.isLoading = false;
        },
        [signUpAsync.rejected]: (state) => {
          state.isLoading = false;
          state.errors = '';
        },
      },
})

const { actions, reducer } = authSlice;

export const {logout} = actions;

export default reducer