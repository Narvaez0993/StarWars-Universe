import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlGetCharacters, urlGetFilms, urlGetStarships } from './url';

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const response = await fetch(urlGetCharacters);
    const data = await response.json();
    return data
  }
);

export const GetFilms = createAsyncThunk(
    'films/getFilms',
    async () => {
      const response = await fetch(urlGetFilms);
      const data = await response.json();
      return data
    }
);

export const GetStarships = createAsyncThunk(
    'starships/getStarships',
    async () => {
      const response = await fetch(urlGetStarships);
      const data = await response.json();
      return data
    }
);