import React from "react";

const CategoryCard = ({ category }) => {
  const { _id, name } = category;
  console.log(category);
  const handleCard = () => {
    console.log(_id);
  };
  return (
    <div>
      <div onClick={handleCard} className="card w-96  bg-blue-100">
        <div className="card-body">
          <div className="card-actions "></div>
          <h1 className="text-center text-blue-600 text-3xl font-bold">
            {category.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
