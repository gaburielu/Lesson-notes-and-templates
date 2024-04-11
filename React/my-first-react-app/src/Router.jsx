import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Components/Profile";
import FilmList from "./Components/Api";
import ErrorPage from "./Components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile/:name",
      element: <Profile />,
    },
    {
      path: "/film-list",
      element: <FilmList />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
