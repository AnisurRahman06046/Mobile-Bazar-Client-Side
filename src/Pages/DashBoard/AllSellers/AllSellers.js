import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const AllSellers = () => {
  const { data: allsellers = [], refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/allsellers");
      const data = await res.json();
      return data;
    },
  });
  const handleSellerDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/seller/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Deleted Successfully");
        }
        refetch();
      });
  };
  return (
    <div>
      <h1 className="text-xl font-semibold">All Sellers</h1>
      <div className="overflow-x-auto mt-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th>Image</th> */}
              <th>Seller Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((allseller, i) => (
              <>
                <tr key={allseller._id}>
                  <th>{i + 1}</th>

                  <td>{allseller.name}</td>
                  <td>{allseller.email}</td>
                  <td>
                    <button
                      onClick={() => handleSellerDelete(allseller._id)}
                      className="btn btn-primary btn-xs"
                      type="submit"
                    >
                      Delete
                    </button>
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

export default AllSellers;
