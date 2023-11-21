import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Reister/Register";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import DeshHome from "../Pages/Dashboard/User/DeshboardHome/DeshHome";
import Reservation from "../Pages/Dashboard/User/Reservation/Reservation";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import Bookings from "../Pages/Dashboard/User/Bookings/BookingsAdmin";
import AddItem from "../Pages/Dashboard/Admin/AddItem/AddItem";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem/UpdateItem";
import BookingsAdmin from "../Pages/Dashboard/User/Bookings/BookingsAdmin";
import Cart from "../Pages/Dashboard/User/Cart/Cart";
import Review from "../Pages/Dashboard/User/Review/Review";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            {" "}
            <DeshHome></DeshHome>
          </PrivateRouter>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRouter>
            <Cart></Cart>
          </PrivateRouter>
        ),
      },
      {
        path: "reservation",
        element: (
          <PrivateRouter>
            {" "}
            <Reservation></Reservation>
          </PrivateRouter>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRouter>
            <Payment></Payment>
          </PrivateRouter>
        ),
      },
      {
        path: "review",
        element: (
          <PrivateRouter>
            <Review></Review>
          </PrivateRouter>
        ),
      },
      {
        path: "booking",
        element: (
          <PrivateRouter>
            <Bookings></Bookings>
          </PrivateRouter>
        ),
      },
      // Admin Router
      {
        path: "/dashboard/home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageBookings",
        element: (
          <AdminRoute>
            <BookingsAdmin></BookingsAdmin>
          </AdminRoute>
        ),
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "update",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
