import { Link, NavLink } from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import img from "../../../assets/others/profile.png";
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [cart] = useCart();

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

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const navbarStyle = {
    backgroundColor: scrolling ? "white" : "rgba(0, 0, 0, 0.2)",
    color: scrolling ? "black" : "white",
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/" className="btnStyle">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="btnStyle">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="btnStyle">
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" className="btnStyle">
          Order
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className="lg:px-12 md:px-6 navbar  text-golden font-bold uppercase p-5 fixed z-10 opacity bg-white shadow-md"
      style={navbarStyle}
    >
      <div className="container mx-auto">
        <div className="hidden md:flex items-center ">
          <img src="" className="w-20" />
          <p className="lg:text-2xl text-xl font-semibold text-blue-700"></p>
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
          <Link
            to={"dashboard/dashboard/cart"}
            type="button"
            className="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <FaCartPlus className="text-2xl"></FaCartPlus>
            <span className="flex absolute top-0 end-0 -mt-2 -me-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
              <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                {cart.length}
              </span>
            </span>
          </Link>
          <div className="navbar-end flex items-center">
            <div className="dropdown dropdown-end">
              <label
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img src={img} alt="" />
                  )}
                </div>
              </label>
              {isDropdownOpen && (
                <div
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-white"
                >
                  <div className="flex flex-col items-center space-y-2 mb-5">
                    <div className="w-20 flex justify-center items-center">
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          alt=""
                          className="w-20 rounded-full border"
                        />
                      ) : (
                        <img src={img} alt="" />
                      )}
                    </div>
                    <p>Name: {user?.displayName}</p>
                    <p>{user?.email}</p>
                  </div>

                  <li>
                    {user ? (
                      <button onClick={handleLogOut}>Log Out</button>
                    ) : (
                      <Link to={"/login"}>Login</Link>
                    )}
                  </li>
                  <li>
                    <Link to={"/Register"}>Register</Link>
                  </li>
                  <li>
                    <Link to={"/Register"}>Setting</Link>
                  </li>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
