import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

import Layout from "../Layout/PageLayout";
import PortfolioCodes from "../Pages/PortfolioCodes";
import Contact from "../Pages/Contact";
import Repo from "../Pages/Repo";
import Portfolio from "../Pages/Portfolio";
import PortfolioProjects from "../Pages/PortfolioProjects";
import Error from "../Pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Portfolio/codes",
        element: <PortfolioCodes />,
      },
      {
        path: "/Portfolio/projects",
        element: <PortfolioProjects />,
      },
      {
        path: "/Portfolio/codes/:repo",
        element: <Repo />,
      },
    ],
  },
  { path: "*", element: <Error /> },
]);

export default router;
