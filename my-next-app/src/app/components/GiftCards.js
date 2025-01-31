"use client";

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";

const GiftCards = () => {
  const giftCards = [
    { id: 1, image: "/Images/giftcard.webp", price: 50 },
    { id: 2, image: "/Images/giftcard.webp", price: 100 },
    { id: 3, image: "/Images/giftcard.webp", price: 150 },
  ];

  const addToCart = (price) => {
    toast.success(`$${price} Gift Card added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    });
  };

  return (
    <div className="relative text-center px-4 lg:px-20 xl:px-40 ">
      {/* <h2 className="montserrat text-2xl lg:text-5xl text-black text-center mb-12" data-aos="zoom-out">
        GIFT CARDS
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {giftCards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-gray-100"
          >
            <div className="w-full">
            <img src={card.image} alt="$ Gift Card" className="w-full h-[100%] object-cover rounded-md" /></div>
            <h3 className="exo text-xl font-semibold mt-4 text-black">${card.price} Gift Card</h3>
            <button
              onClick={() => addToCart(card.price)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded flex items-center justify-center w-full hover:bg-red-700 transition"
            >
              Add to Cart <FaCartShopping className="ml-2" />
            </button>
          </div>
        ))}
      </div>
      <ToastContainer className={'z-[99999999999]'}/>
    </div>
  );
};

export default GiftCards;
