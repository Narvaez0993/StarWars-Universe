import {useEffect, useState} from "react";
import {
    RouterProvider,
} from "react-router-dom"
import Router from "./shared/presentation/Router";
import { useDispatch } from 'react-redux';
import { GetStarships, getCharacters } from "./shared/infraestructure/api/request";
import { GetFilms } from "./shared/infraestructure/api/request";
import { loadFromLocalStorage } from "./domains/obtainFoils/application/slices/foilsObtained";


const App = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if (!initialized) {
            dispatch(GetFilms())
            dispatch(GetStarships())
            dispatch(getCharacters())
            dispatch(loadFromLocalStorage())
            setInitialized(true)
        }
    }, [initialized, dispatch]);

    return (
        <RouterProvider router={Router}/>
    )
}

export default App;