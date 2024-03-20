import { createSelector } from '@reduxjs/toolkit';

const swapiState = (state) => state?.foilsObtained;

export const obtainedFoils = createSelector(swapiState, (state) => {
    return state?.items;
});

