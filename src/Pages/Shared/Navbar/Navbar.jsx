import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';



const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className=" hover:text-blue-500 transition duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className=" hover:text-blue-500 transition duration-300"
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/post"
          className=" hover:text-blue-500 transition duration-300"
        >
          My Posted Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className=" hover:text-blue-500 transition duration-300"
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/request"
          className="hover:text-blue-500 transition duration-300"
        >
          My Request
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:px-12 md:px-6 navbar bg-black text-white p-5 fixed z-10 opacity-60">
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
              className="dropdown-content mt-3 z-[1] p-5 space-y-3 shadow bg-base-200 text-black rounded-box w-52"
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