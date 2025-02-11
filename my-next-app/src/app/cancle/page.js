"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CancelPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // To check if we're on the client side

  useEffect(() => {
    // We want to make sure we're on the client before accessing router.query
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Check if cancel information exists in the query and handle it
    if (isClient && router.query && router.query.payment_status === "failed") {
      // Handle the failure logic here if needed (e.g., logging or notifying)
      toast.error("Payment failed! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isClient, router.query]);

  if (!isClient) return null; // Return nothing until we are on the client

  return (
    <div className="flex flex-col items-center justify-center py-24 mt-[120px]">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Payment Failed!</h2>
      <p className="text-lg text-gray-700 mb-8">
        Unfortunately, your payment could not be processed. Please try again or contact .
      </p>
      <div className="flex items-center gap-12 justify-center">
      <button
        onClick={() => router.push("/gift-card")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Try Again
      </button>
      <button
        onClick={() => router.push("/support")}
        className=" bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition"
      >
        Contact Support
      </button>
      </div>
    </div>
  );
};

export default CancelPage;
