import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const handleProductData = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addedproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully added");
          navigate("/dashboard/myproduct");
        }
      });
  };
  return (
    <div>
      <h1>Add A Product</h1>
      <form
        onSubmit={handleSubmit(handleProductData)}
        className="px-40 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 p-3 bg-orange-100"
      >
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Price</span>
          </label>
          <input
            {...register("price")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Condition</span>
          </label>
          <select
            {...register("condition")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Select Condition</option>
            <option>Excellent</option>
            <option>Fair</option>
            <option>Good</option>
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mobile Number</span>
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Location</span>
          </label>
          <input
            {...register("location")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Year of Purchase</span>
          </label>
          <input
            {...register("purchaseYear")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Image</span>
          </label>
          <input
            {...register("img")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea  md:w-[320px] lg:w-[320px] textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
        <button
          className="btn lg:btn-wide btn-primary  lg:ml-52 mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
