import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Mobile-Bazar
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/login">Log In</Link>
            </li>

            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
