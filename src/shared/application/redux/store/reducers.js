import { combineReducers } from 'redux';
import charactersReducer from '../slices/characterSlice';
import filmReducer from '../slices/filmSlice';
import starshipReducer from '../slices/StarshipSlice';
import foilsReducer from '../../../../domains/obtainFoils/application/slices/foilsObtained';

export default combineReducers({
    characters: charactersReducer,
    films: filmReducer,
    starships: starshipReducer,
    foilsObtained: foilsReducer,
});
