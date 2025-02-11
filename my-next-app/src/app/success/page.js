"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // To check if we're on the client side

  useEffect(() => {
    // We want to make sure we're on the client before accessing router.query
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Check if session_id exists in the query and handle it
    if (isClient && router.query && router.query.session_id) {
      const sessionId = router.query.session_id;
      // Handle the session ID logic here if needed (e.g., verify with backend)
      toast.success("Payment successful! Your Gift Card is ready.", {
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
      <h2 className="text-3xl font-bold text-green-600 ">
        Payment Successful!
      </h2>
      <p className="text-lg text-gray-700 my-8 text-center">
        Your payment has been successfully processed. You will receive your
        payment receipt at your email address today. <br/>Once you have the receipt,
        you can pick up your gift card from the site.
      </p>
      <button
        onClick={() => router.push("/gift-card")}
        className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
      >
        Go to Gift Cards
      </button>
    </div>
  );
};

export default SuccessPage;
