import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const MyOrders = () => {
  const { data: bookedItems = [] } = useQuery({
    queryKey: ["bookeditems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/bookeditems");
      const data = await res.json();
      return data;
    },
  });
  console.log(bookedItems);
  return (
    <div>
      <h1>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookedItems.map((bookedItem, i) => (
              <>
                <tr key={bookedItem._id}>
                  <th>{i + 1}</th>
                  <td>Cy Ganderton</td>
                  <td>{bookedItem.name}</td>
                  <td>{bookedItem.resalePrice}</td>
                  <td>
                    <Link className="btn btn-primary btn-sm">Pay</Link>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
