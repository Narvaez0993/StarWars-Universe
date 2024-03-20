// dataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const FoilsObtainedSlice = createSlice({
  name: 'foilsObtained',
  initialState: {
    items: {},
  },
  reducers: {

    addItem(state, action) {
      const { id, resourceType } = action.payload;
     
      if (!state.items[resourceType]) {
        state.items[resourceType] = [];
      }
      state.items[resourceType].push(id);

      localStorage.setItem('foilsObtained', JSON.stringify(state.items));
    },

    loadFromLocalStorage(state) {
      const storedData = JSON.parse(localStorage.getItem('foilsObtained'));
      if (storedData) {
        state.items = storedData;
      }
    },
  },
});

export const { addItem, loadFromLocalStorage } = FoilsObtainedSlice.actions;
export default FoilsObtainedSlice.reducer;
