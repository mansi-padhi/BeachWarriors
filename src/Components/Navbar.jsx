import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import VolunterDashBoard from "../Pages/VolunterDashBoard";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Beach Warriors</Link>
      </div>

      {/* Center: Links */}
      <div className="justify-evenly ">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Our Work</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </div>

      {/* Right: Login buttons + Avatar */}
      <div className=" gap-4 dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 h-10 rounded-full flex items-center justify-center">
      <VscAccount className="text-4xl" />
    </div>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
    <li>
      <Link to="/volunteer">Volunteer Login</Link>
    </li>
    <li>
      <Link to="/NgoDashboard">NGO Login</Link>
    </li>
    <li><a>Logout</a></li>
  </ul>
    
      </div>
    </div>
  );
}

export default Navbar;
