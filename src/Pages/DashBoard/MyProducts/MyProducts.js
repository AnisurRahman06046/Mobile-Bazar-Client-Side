import React from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const MyProducts = () => {
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["addedproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addedproducts");
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteBySeller = (id) => {
    fetch(`http://localhost:5000/postedproduct/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };
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
              <th>Action</th>
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
                  <td>
                    <button
                      onClick={() => handleDeleteBySeller(myProduct._id)}
                      className="btn btn-primary btn-xs"
                      type="submit"
                    >
                      Delete
                    </button>
                  </td>
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
