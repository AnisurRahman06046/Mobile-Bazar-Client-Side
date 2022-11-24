import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const handleLoginform = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="hero  bg-slate-800">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center mt-4 ">Log In Now</h1>
            <form onSubmit={handleLoginform} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type=""
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Don't have an account?
                    <span className="text-blue-500">Register</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
