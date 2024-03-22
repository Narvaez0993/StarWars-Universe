import { home, myAlbumCharacters, myAlbumFilms, myAlbumStarShips } from "../infraestructure/routing/routes";
import MainLayout from "./components/layout";
import FoilsPage from "../../domains/obtainFoils/presentation/pages/foilsPage";
import Film from '../../domains/myAlbum/presentation/pages/film';
import Character from '../../domains/myAlbum/presentation/pages/character';
import StarShip from '../../domains/myAlbum/presentation/pages/starship'
import ErrorPage from "./components/errorPage";
import {
    createBrowserRouter,
} from "react-router-dom";

const Router = createBrowserRouter(
  [
    {
      path: home,
      element: <MainLayout><FoilsPage /></MainLayout>,
      errorElement:<ErrorPage/>
    },
    {
      path: myAlbumFilms,
      element: <MainLayout><Film/></MainLayout>
    },
    {
      path: myAlbumCharacters,
      element: <MainLayout><Character/></MainLayout>
    },
    {
      path: myAlbumStarShips,
      element: <MainLayout><StarShip/></MainLayout>
    }
]);

  
export default Router;