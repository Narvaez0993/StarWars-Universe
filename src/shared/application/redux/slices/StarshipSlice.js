import { createSlice } from '@reduxjs/toolkit';
import { GetStarships } from '../../../infraestructure/api/request';

export const StarshipSlice = createSlice({
    name: 'starships',
    initialState: {
        starships: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetStarships.pending, (state) => {
          state.loading = true;
        })
        .addCase(GetStarships.fulfilled, (state, action) => {
          state.loading = false;
          state.starships = action.payload;
        })
        .addCase(GetStarships.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export default StarshipSlice.reducer;
