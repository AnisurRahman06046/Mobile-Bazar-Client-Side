// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import React from "react";
// import { useLoaderData } from "react-router-dom";

// import CheckoutForm from "./CheckoutForm";
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

// const Payment = () => {
//   const bookedData = useLoaderData();
//   console.log(bookedData);
//   const { userName, name, email, resalePrice, Phone, meetingLocation } =
//     bookedData;
//   return (
//     <div>
//       <h1>Payment</h1>
//       <div className="text-xl font-semibold bg-orange-300 p-4 w-1/2">
//         <h1>Customer Name : {userName} </h1>
//         <p>Phone :{Phone} </p>
//         <p>Email : {email} </p>
//         <p>Location : {meetingLocation} </p>
//         <p>Ordered Item : {name} </p>
//         <p>Price : {resalePrice} </p>
//         {/* <button className="btn btn-primary mt-2" type="submit">
//           Confirm Payment
//         </button> */}
//       </div>
//       <div className="w-96 mt-4 ">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm bookedData={bookedData}></CheckoutForm>
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default Payment;
