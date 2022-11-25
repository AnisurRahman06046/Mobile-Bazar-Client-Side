import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const handleRegisterform = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 bg-slate-500">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleRegisterform)}>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              {...register("userName", {})}
              className="input input-bordered w-full  max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full  max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full  max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text ">Account Type</span>
            </label>
            <select
              {...register("type", {})}
              className="select w-full bg-white max-w-xs"
            >
              <option>Select Your Account Type</option>
              <option>Seller</option>
              <option>Buyer</option>
            </select>
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary w-full"
            value="Register"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-700 font-semibold" to="/login">
            Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline  text-white w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
