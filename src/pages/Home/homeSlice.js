import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import movieApi from '../../apis/movieApi';

export const getBanners = createAsyncThunk('home/getBanners', async () => {
  const banners = await axios.get(
    'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner'
  );
  return banners.data.content;
});
export const getMovies = createAsyncThunk(
  'home/getMovies',
  async (pagination) => {
    const movies = await movieApi.getMovies(pagination);
    return movies;
  }
);


const homePageSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    movieList: [],
    pagination: {
      currentPage: 1,
      count: 8,
    },
    loading: false,
    errors: '',
  },

  reducers: {
  },
  extraReducers: {
    [getBanners.pending]: (state) => {
      state.loading = true;
    },
    [getBanners.fulfilled]: (state, action) => {
      state.loading = false;
      state.banners = action.payload;
    },
    [getBanners.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.error;
    },

    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieList = action.payload.items;
    },
    [getMovies.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.error;
    },  
  },
});
const { actions, reducer } = homePageSlice;

export const {} = actions;

export default reducer;