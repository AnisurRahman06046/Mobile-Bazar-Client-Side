import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1>Add A Product</h1>
      <form className="px-40 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 p-3 bg-orange-100">
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Price</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Condition</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled>Select Condition</option>
            <option>Excellent</option>
            <option>Fair</option>
            <option>Good</option>
          </select>
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Mobile Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Location</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Year of Purchase</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Image</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          {" "}
          <label>
            <span className="label-text text-xl">Description</span>
          </label>
          <textarea
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
