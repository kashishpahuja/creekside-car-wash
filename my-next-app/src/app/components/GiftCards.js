"use client";

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const GiftCards = () => {
  const giftCards = [
    {
      id: 1,
      image: "/Images/gift/card.webp",
      name: "Regular Gift Card",
      price: 50,
    },
    {
      id: 2,
      image: "/Images/gift/card.webp",
      name: "Delux Gift Card",
      price: 100,
    },
    {
      id: 3,
      image: "/Images/gift/card.webp",
      name: "Premium Gift Card",
      price: 150,
    },
    {
      id: 4,
      image: "/Images/gift/card.webp",
      name: "Regular Gift Card",
      price: 250,
    },
    {
      id: 5,
      image: "/Images/gift/card.webp",
      name: "Delux Gift Card",
      price: 350,
    },
    {
      id: 6,
      image: "/Images/gift/card.webp",
      name: "Premium Gift Card",
      price: 450,
    },
  ];

  const handleBuyNow = async (price) => {
    // Send the price to your backend to create a Stripe session
    const response = await fetch(
      "https://creekside-car-wash.onrender.com/payment/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      }
    );

    const session = await response.json();
    if (session.id) {
      // Redirect to the Stripe Checkout page
      const stripe = await loadStripe(
        "pk_live_51QpbI8JBPpjDz7k5xWkeh6e8QjN9So1L6R1mabUvKkS1TR6G4GRHFsHhZCkgOkOz7MCAWhBfXoxIkiYpJcXesyRM00zQUJL6BL"
      ); // Use your own Stripe public key here
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      toast.error("Error creating payment session. Please try again.");
    }
  };

  return (
    <div className="relative text-center px-4 lg:px-20 xl:px-40 my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {giftCards.map((card) => (
          <div key={card.id} className="shadow-lg rounded-lg p-4 bg-gray-200">
            <div className="w-full ">
              <Image
                width={400}
                height={400}
                src={card.image}
                alt="Gift Card"
                className="w-full h-[100%] object-contain rounded-md"
              />
            </div>
            <div className="flex items-center justify-between flex-col lg:flex-row mt-4">
              <div className="">
                {/* <h3 className="exo text-md mt-4 text-gray-600">{card.name}</h3> */}
                <h3 className="font-semibold text-lg mt-2 text-gray-800">
                  ${card.price} Gift Card
                </h3>
              </div>
              <div>
                <button
                  onClick={() => handleBuyNow(card.price)}
                  className=" bg-red-600 text-white px-4 py-2 rounded flex items-center justify-center w-full hover:bg-red-700   font-bold transition"
                >
                  Buy Now <FaCartShopping className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer style={{ zIndex: 999999999 }} />
    </div>
  );
};

export default GiftCards;

// "use client";

// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaCartShopping } from "react-icons/fa6";
// import { ToastContainer } from "react-toastify";
// import Link from "next/link";

// const GiftCards = () => {
//   const giftCards = [
//     {
//       id: 1,
//       image: "/Images/giftcard.webp",
//       name: "Regular Gift Card",
//       price: 50,
//     },
//     {
//       id: 2,
//       image: "/Images/giftcard.webp",
//       name: "Delux Gift Card",
//       price: 100,
//     },
//     {
//       id: 3,
//       image: "/Images/giftcard.webp",
//       name: "Premium Gift Card",
//       price: 150,
//     },
//   ];

//   const addToCart = (price) => {
//     toast.success(
//       <div className="flex flex-col gap-2 items-start justify-start">
//         <span>${price} Gift Card added to cart! <br /> </span>
//         <Link href={"/cart"} className="text-white bg-blue-500 rounded-lg hover:text-blue-500 hover:bg-white transition-all duration-400 p-2 ">
//           View Cart
//         </Link>
//       </div>,
//       {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       }
//     );
//   };
//   return (
//     <div className="relative text-center px-4 lg:px-20 xl:px-40 my-24">
//       {/* <h2 className="montserrat text-2xl lg:text-5xl text-black text-center mb-12" data-aos="zoom-out">
//         GIFT CARDS
//       </h2> */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {giftCards.map((card) => (
//           <div
//             key={card.id}
//             className=" shadow-lg rounded-lg p-4  bg-gray-200"
//           >
//             <div className="w-full ">
//               <img
//                 src={card.image}
//                 alt="Gift Card"
//                 className="w-full h-[100%] object-contain rounded-md"
//               />
//             </div>
//             <div className="text-left">
//               <h3 className="exo text-md  mt-4 text-gray-600">{card.name}</h3>
//               <h3 className="font-semibold text-lg  mt-2 text-gray-800">
//                 ${card.price}.00
//               </h3>
//             </div>
//             <Link
//               // onClick={() => addToCart(card.price)}
//               href={'/cart'}
//               className=" mt-4 bg-red-600 text-white px-4 py-2 rounded flex items-center justify-center w-full hover:bg-red-700 transition"
//             >
//              Buy Now <FaCartShopping className="ml-2" />
//             </Link>
//           </div>
//         ))}
//       </div>
//       <ToastContainer style={{ zIndex: 999999999 }} />

//     </div>
//   );
// };

// export default GiftCards;
