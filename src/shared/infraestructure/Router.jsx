import React from "react";
import { home, myAlbum, obtainFoils } from "./routes";
import MainLayout from "../presentation/components/layout";
import {
    createBrowserRouter,
} from "react-router-dom";

const Router = createBrowserRouter(
  [
    {
      path: home,
      element: <MainLayout children={<h1>Inicio</h1>}/>,
    },
    {
      path: obtainFoils,
      element: <MainLayout children={<h1>Obtener laminas</h1>}/>,
    },
    {
      path: myAlbum,
      element: <MainLayout children={<h1>Mi album</h1>}/>,
    },
]);

  
export default Router;