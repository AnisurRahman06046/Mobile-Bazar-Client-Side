import React from "react";

const ProductCard = ({ product }) => {
  const {
    img,
    location,
    name,
    originalPrice,
    resalePrice,
    sellerName,
    usedYear,
  } = product;
  return (
    <div>
      <div className="card w-96 p-10 bg-white text-black shadow-xl">
        <figure>
          <img style={{ height: "250px" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">{name}</h2>
          <p className="text-black">
            <span className="font-semibold text-black">Location:</span>{" "}
            {location}
          </p>
          <p>
            <span className="font-semibold">Resale Price</span> : Tk{" "}
            {resalePrice}
          </p>
          <p>
            <span className="font-semibold">Original Price</span> : Tk{" "}
            {originalPrice}
          </p>
          <p>
            <span className="font-semibold">Used</span> : {usedYear}{" "}
          </p>
          <p className="text-xl font-semibold">Seller Name : {sellerName}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
