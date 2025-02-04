"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaRupeeSign } from "react-icons/fa";

function CheckoutPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Amazon Gift Card",
      price: 500,
      quantity: 1,
      image: "/Images/giftcard.webp",
    },
    {
      id: 2,
      name: "Google Play Gift Card",
      price: 1000,
      quantity: 1,
      image: "/Images/giftcard.webp",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(1500);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(newTotal);
  }, [cart]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 md:mx-28 mb-12 mt-[100px]">
      {/* Left Side - Billing Details */}
      <div className="w-full lg:w-2/3 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Address" className="w-full p-3 border rounded" required />
          <select className="w-full p-3 border rounded" required>
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
          <button type="submit" className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-200">
            Place Order
          </button>
        </form>
      </div>

      {/* Right Side - Price Summary Sidebar */}
      <div className="w-full lg:w-1/3 bg-gray-50 p-6 border border-gray-200 rounded-lg shadow-sm sticky top-24">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-800 font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
              </div>
              <p className="text-gray-800 font-medium flex items-center">
                <FaRupeeSign /> {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-4 font-semibold text-lg text-gray-800">
          <span>Total</span>
          <span className="flex items-center"><FaRupeeSign/> {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
