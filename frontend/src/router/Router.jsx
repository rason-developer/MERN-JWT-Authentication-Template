import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import LogRegister from "../layout/LogRegister";
import Login from "../pages/login/Login"
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:"/",
            element:<Home/>
        }
      ]
    },
    {
        path:"/user",
        element:<LogRegister/>,
        children: [
            {
                path:"/user/login",
                element:<Login/>
            }
        ]
    }
  ]);

export default router;