import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);
  return (
    <div>
      <div className="navbar bg-purple-200">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Mobile-Bazar
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {user?.uid ? (
              <>
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </>
            )}

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
