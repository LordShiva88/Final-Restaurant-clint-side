import { NavLink, Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import { FaCalendar, FaCartPlus, FaFileContract, FaHome } from "react-icons/fa";
import { MdPayments, MdOutlineRateReview, MdContactMail, MdOutlineRestaurantMenu  } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <Container>
      <div className="flex">
        <div className="w-64 min-h-screen bg-[#D1A054] uppercase text-2xl">
          <ul className="menu p-4 space-y-4">
            <li>
              <NavLink to={"dashboard/home"}>
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/reservation"}>
                <FaCalendar></FaCalendar> reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/payment"}>
                <MdPayments></MdPayments> payment history
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/cart"}>
                {" "}
                <FaCartPlus></FaCartPlus>My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/review"}>
                <MdOutlineRateReview></MdOutlineRateReview> add review
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/booking"}>
                <TbBrandBooking></TbBrandBooking>my booking
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
               <MdContactMail ></MdContactMail> Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
              <MdOutlineRestaurantMenu></MdOutlineRestaurantMenu>  Menu
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
