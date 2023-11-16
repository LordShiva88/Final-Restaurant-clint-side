import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";



const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? "white" : "rgba(0, 0, 0, 0.2)",
    color: scrolling ? "black" : "white",
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className="btnStyle"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="btnStyle"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className="btnStyle"
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="btnStyle"
        >
          login 
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="btnStyle"
        >
          Register 
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:px-12 md:px-6 navbar  text-golden font-bold uppercase p-5 fixed z-10 opacity bg-white shadow-md" style={navbarStyle}>
      <div className="container mx-auto">
        <div className="hidden md:flex items-center ">
          <img src="" className="w-20" />
          <p className="lg:text-2xl text-xl font-semibold text-blue-700">

          </p>
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FaBars className="text-2xl"></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] space-y-5 shadow rounded-box w-52 btnStyle bg-white text-black py-5"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="px-1 flex gap-10">{navLink}</ul>
        </div>

        <div className="navbar-end flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full"></div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex flex-col items-center space-y-2 mb-5"></div>

              <li><Link></Link></li>
              <li>
                <Link to={"/Register"}>Register</Link>
              </li>
              <li>
                <Link to={"/Register"}>Setting</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
