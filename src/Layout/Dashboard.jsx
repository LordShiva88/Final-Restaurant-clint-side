import { NavLink, Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import {
  MdPayments,
  MdOutlineRateReview,
  MdContactMail,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  return (
    <Container>
      <div className="flex">
        <div className="w-64 min-h-screen bg-[#D1A054] uppercase text-2xl">
          <ul className="menu p-4 space-y-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashboard/home"}>
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addItem"}>
                    <FaUtensils></FaUtensils> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/managements"}>
                    <FaCalendar></FaCalendar> Managements
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageBookings"}>
                    <FaBook></FaBook> Manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allUser"}>
                    <FaUsers></FaUsers> all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/dashboard"}>
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reservation"}>
                    <FaCalendar></FaCalendar> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/payment"}>
                    <MdPayments></MdPayments> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/cart"}>
                    {" "}
                    <FaCartPlus></FaCartPlus> My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/review"}>
                    <MdOutlineRateReview></MdOutlineRateReview> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/booking"}>
                    <TbBrandBooking></TbBrandBooking> My Booking
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <MdContactMail></MdContactMail> Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <MdOutlineRestaurantMenu></MdOutlineRestaurantMenu> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaCartPlus></FaCartPlus> Order
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full px-8">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
