import React from "react";

const BookNowModal = ({ bookProduct }) => {
  const { name, resalePrice } = bookProduct;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-3 text-black p-5">
            <input
              type="text"
              placeholder="User Name"
              className="input w-full bg-white "
            />
            <input
              type="email"
              placeholder="Email"
              className="input w-full bg-white "
            />
            <input
              type="text"
              value={name}
              disabled
              placeholder="Item Name"
              className="input w-full bg-blue-100"
            />
            <input
              type="text"
              value={resalePrice}
              disabled
              placeholder="Price"
              className="input w-full bg-white"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input w-full bg-white"
            />
            <input
              type="text"
              placeholder="Meeting Location"
              className="input w-full bg-white"
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
