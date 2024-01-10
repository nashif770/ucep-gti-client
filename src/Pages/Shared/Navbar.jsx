import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../0.providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li >
        <Link to="/" className="btn btn-ghost text-xl hover:bg-white hover:text-[#f46c24] bg-white text-[#f46c24]">Home</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-b from-[#cda549] to-[#f26822] text-[#040409]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl hover:bg-white hover:text-[#f46c24] bg-white text-[#f46c24]">
          UCEP Gazipur TVET Institute
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <div className="mx-6">
          <h1 style={{ color: "#040409" }}>{user?.displayName}</h1>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-ghost text-xl hover:bg-white hover:text-[#f46c24] bg-white text-[#f46c24]"
            to="login"
          >
            Logout
          </button>
        ) : (
          <Link
            className="btn btn-ghost text-xl hover:bg-white hover:text-[#f46c24] bg-white text-[#f46c24]"
            to={"/login"}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
