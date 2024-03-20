import { createSlice } from '@reduxjs/toolkit';
import { GetFilms } from '../../../infraestructure/api/request';

export const FilmSlice = createSlice({
    name: 'films',
    initialState: {
      films: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetFilms.pending, (state) => {
          state.loading = true;
        })
        .addCase(GetFilms.fulfilled, (state, action) => {
          state.loading = false;
          state.films = action.payload;
        })
        .addCase(GetFilms.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export default FilmSlice.reducer;
