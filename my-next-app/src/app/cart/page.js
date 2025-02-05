"use client";

import { useEffect, useState } from "react";
import DeleteConfirmation from "../components/DeletePopup";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaRupeeSign, FaTimes } from "react-icons/fa";

function GiftCardCartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Regular Gift Card",
      price: 50,
      quantity: 1,
      image: "/Images/giftcard.webp",
    },
    {
      id: 2,
      name: "Delux Gift Card",
      price: 100,
      quantity: 1,
      image: "/Images/giftcard.webp",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(1500);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [cardToRemove, setCardToRemove] = useState(null);

  // Function to recalculate total price
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(newTotal);
  }, [cart]);

  const handleRemoveClick = (id) => {
    setShowRemovePopup(true);
    setCardToRemove(id);
  };

  const confirmRemoveCard = () => {
    setCart(cart.filter((item) => item.id !== cardToRemove));
    setShowRemovePopup(false);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 md:mx-28 mb-12 mt-[150px]">
      <div className="w-full lg:w-2/3">
        <h2 className="montserrat text-2xl mb-4">Gift Card Cart</h2>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col gap-6">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="relative flex justify-between items-center border-b pb-4">
                <button
                  className="absolute top-2 right-2 text-gray-500 text-sm hover:text-red-600"
                  onClick={() => handleRemoveClick(item.id)}
                >
                  <FaTimes />
                </button>
                <div className="flex items-start gap-4">
                  <div><img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 flex items-center mt-2">
                    ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-16 border rounded text-center"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-medium">Nothing In Cart!</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link href={"/gift-card"}>
            <div className="btn-transition rounded-lg w-fit flex items-center justify-center gap-4 text-md hover:text-red-600 font-semibold">
              <FaArrowLeft />
              <p>Explore Gift Cards</p>
            </div>
          </Link>
          {/* <Link href={cart.length > 0 ? "/checkout" : "#"}>
            <div className={`btn-transition rounded-lg w-fit flex items-center justify-center gap-4 text-md font-medium ${cart.length === 0 ? "cursor-not-allowed" : ""}`}>
              <p>Proceed to Checkout</p>
              <FaArrowRight />
            </div>
          </Link> */}
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <h2 className="montserrat text-2xl mb-4">Price Summary</h2>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between py-2 text-gray-700">
            <span>Subtotal</span>
            <span className="flex items-center"> $ {totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg text-gray-800">
            <span>Total</span>
            <span className="flex items-center">$ {totalPrice.toFixed(2)}</span>
          </div>
          <Link href={cart.length > 0 ? "/checkout" : "#"}>
            <button
              className={`w-full mt-6 py-3 font-semibold rounded-lg transition duration-200 ${
                cart.length > 0 ? "bg-red-600 text-white hover:bg-red-800" : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      {showRemovePopup && (
        <DeleteConfirmation
          itemName=""
          itemType="Gift Card"
          onCancel={() => setShowRemovePopup(false)}
          onDelete={confirmRemoveCard}
          task="Remove"
        />
      )}
    </div>
  );
}

export default GiftCardCartPage;
