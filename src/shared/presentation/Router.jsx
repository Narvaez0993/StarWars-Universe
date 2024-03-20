import { home, myAlbum, obtainFoils } from "../infraestructure/routing/routes";
import MainLayout from "./components/layout";
import MyAlbum from "../../domains/myAlbum/presentation/pages/myAlbum";
import FoilsPage from "../../domains/obtainFoils/presentation/pages/foilsPage";
import {
    createBrowserRouter,
} from "react-router-dom";

const Router = createBrowserRouter(
  [
    {
      path: home,
      element: <MainLayout><h1>Inicio</h1></MainLayout>,
    },
    {
      path: obtainFoils,
      element: <MainLayout><FoilsPage /></MainLayout>,
    },
    {
      path: myAlbum,
      element: <MainLayout><MyAlbum /></MainLayout>,
    },
]);

  
export default Router;