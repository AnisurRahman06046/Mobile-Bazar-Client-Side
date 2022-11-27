import React from "react";
// import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const MyProducts = () => {
  const { data: myProducts = [] } = useQuery({
    queryKey: ["addedproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addedproducts");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1>My products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              {/* <th>Payment Status</th> */}
            </tr>
          </thead>
          <tbody>
            {myProducts.map((myProduct, i) => (
              <>
                <tr key={myProduct._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      style={{ height: "80px", width: "100px" }}
                      src={myProduct.img}
                      alt=""
                    />
                  </td>
                  <td>{myProduct.name}</td>
                  <td>{myProduct.price}</td>
                  {/* <td>
                    <Link className="btn btn-primary btn-sm">Pay</Link>
                  </td> */}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
