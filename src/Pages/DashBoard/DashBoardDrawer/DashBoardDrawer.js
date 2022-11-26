import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoardDrawer = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            <li>
              <Link>Add a product</Link>
            </li>
            <li>
              <Link>My Product</Link>
            </li>
            <li>
              <Link>All Sellers</Link>
            </li>
            <li>
              <Link>All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDrawer;
