import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLoginform = (data) => {
    console.log(data);
    setLoginError("");
    // signIn(data.email, data.password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     setLoginUserEmail(data.email);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     setLoginError(error.message);
    //   });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7  bg-purple-500">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLoginform)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
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
              className="input input-bordered w-full max-w-xs"
            />
            {/* <label className="label">
              <span className="label-text">Forget Password?</span>
            </label> */}
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-primary w-full mt-4"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-800 font-semibold" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
