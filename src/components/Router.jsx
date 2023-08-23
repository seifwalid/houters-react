import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../routes/Homepage/Homepage";
import { FC } from "react";
import Dashboard from "../routes/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
