/* eslint-disable react/react-in-jsx-scope */
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../shared/layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/signup/SignUp";
import Checkout from "../pages/checkout/Checkout";
import Bookings from "../pages/bookings/Bookings";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            }, {
                path: "/checkout/:id",
                element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
            }
        ]
    },
]);
export default router;