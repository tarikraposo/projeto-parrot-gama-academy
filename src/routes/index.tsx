import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/user",
    element: <Register/>
  },

  {
    path: "/profile",
    element: <Profile/>
  }
])