import { createSelector } from '@reduxjs/toolkit';

const swapiState = (state) => state;

export const allFilms = createSelector(swapiState, (state) => {
    const { films } = state.films
	return films
});

export const allStarships = createSelector(swapiState, (state) => {
    const { starships } = state.starships
	return starships
});

export const allCharacters = createSelector(swapiState, (state) => {
    const { characters } = state.characters
	return characters
});