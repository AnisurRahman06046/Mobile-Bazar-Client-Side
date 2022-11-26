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
              <Link to="/dashboard/addproduct">Add a product</Link>
            </li>
            <li>
              <Link to="/dashboard/myproduct">My Product</Link>
            </li>
            <li>
              <Link to="/dashboard/allsellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/allbuyers">All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDrawer;
