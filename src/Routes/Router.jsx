import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Booking from "../Pages/Home/Booking";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: () => fetch("data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
