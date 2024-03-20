import { createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../../../infraestructure/api/request';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
      characters: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getCharacters.pending, (state) => {
          state.loading = true;
        })
        .addCase(getCharacters.fulfilled, (state, action) => {
          state.loading = false;
          state.characters = action.payload;
        })
        .addCase(getCharacters.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export default charactersSlice.reducer;
