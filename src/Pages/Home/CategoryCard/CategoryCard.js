// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import BookNowModal from "../../BookNowModal/BookNowModal";
const CategoryCard = ({ category }) => {
  const { _id, name } = category;
  console.log(category);
  const handleCard = () => {
    console.log(_id);
  };
  return (
    <div>
      <Link to={`products/${_id}`}>
        <div onClick={handleCard} className="card w-96  bg-blue-100">
          <div className="card-body">
            <div className="card-actions "></div>
            <h1 className="text-center text-blue-600 text-3xl font-bold">
              {name}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
