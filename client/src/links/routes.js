import {links} from "./links"
import {Navigate} from "react-router-dom"
import MainPage from "../pages/mainPage/MainPage"
import Signup from "../components/auth/sighup/Signup"
import Login from "../components/auth/login/Login"
import UserPage from "../pages/userPage/UserPage"
import AdminPage from "../pages/adminPage/AdminPage"

export const authRoutes = [
    {
        path: links.admin,
        element: <AdminPage/>
    },
    {
        path: links.user + '/:id/',
        element: <UserPage/>
    },
]

export const publicRoutes = [

    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.signup,
        element: <Signup/>
    },
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]