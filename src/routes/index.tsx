import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed"
import Login from "../pages/Login";
import { Profile } from "../pages/Profile";
import Register from "../pages/Register";


export const router = createBrowserRouter([
{
  path: "/",
  element: <Login/>
},
{
  path: "/cadastrar",
  element: <Register/>
},
{
  path: "/profile/:userId",
  element: <Profile/>
},
{
  path: "/feed",
  element: <Feed/>
}
]);

