// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";

// const CheckoutForm = ({ bookedData }) => {
//   const { resalePrice, userName, email } = bookedData;
//   const [cardError, setCardError] = useState("");
//   const [clientSecret, setClientSecret] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("https://server-mobilebazar.vercel.app/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ resalePrice }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, [resalePrice]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card == null) {
//       return;
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });
//     if (error) {
//       console.log(error);
//       setCardError(error.message);
//     } else {
//       setCardError("");
//     }

//     // const { paymentIntent, error: confirmError } =
//     //   await stripe.confirmCardPayment(clientSecret, {
//     //     payment_method: {
//     //       card: card,
//     //       billing_details: {
//     //         name: userName,
//     //         email: email,
//     //       },
//     //     },
//     //   });

//     // if (confirmError) {
//     //   setCardError(confirmError.message);
//     //   return;
//     // }
//     // console.log(paymentIntent);
//   };
//   return (
//     <>
//       {" "}
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn btn-primary btn-sm mt-2"
//           type="submit"
//           disabled={!stripe || !clientSecret}
//         >
//           Pay
//         </button>
//         <p className="text-red-400">{cardError}</p>
//       </form>
//     </>
//   );
// };

// export default CheckoutForm;
