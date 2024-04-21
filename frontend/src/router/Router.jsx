import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login"
import Register from "../pages/register/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/users/login",
          element:<Login/>
        },
        {
          path:"/users/register",
          element:<Register/>,
        }
      ]
    },
  ]);

export default router;