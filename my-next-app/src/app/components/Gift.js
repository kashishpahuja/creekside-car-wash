import React from "react";

function Gift() {
  return (
    <div
      style={{
        backgroundImage: `url('/Images/gift/bg.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" relative z-20 md:mx-4  mx-8 lg:mx-24 my-24 overflow-hidden rounded-xl"
    >
      <div
        className="absolute inset-0 bg-[#acd5da] bg-opacity-70 rounded-xl"
        aria-hidden="true"
      ></div>
      <div className="flex items-center justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8 py-12  lg:px-24 w-full shadow-lg text-black  rounded-xl">
        <div className="w-full md:h-[350px] ">
          <img
            src="/Images/gift/card0.png"
            alt=""
            className=" w-full h-[100%] object-contain"
          />
        </div>
        <div className="text-center lg:pb-8">
          <h3 className="montserrat text-3xl  lg:text-4xl font-bold text-gray-800">
            JOIN YOUR COMMUNITY CAR WASH
          </h3>
          <p className="montserrat my-8 text-md lg:text-xl  text-gray-800">
            Get Creekside’s prepaid wash cards in 2 easy steps!
          </p>
          <div className="xl:w-[800px] mx-auto">
            <p className="exo  text-gray-700 text-md lg:text-lg ">
              Simply choose a denomination (savings included) and proceed to the
              secure checkout screen. You will receive a confirmation email and
              we will have your card or fob ready for pickup in 24hrs. For all
              return customers, simply come see an attendant to recharge the
              card.
            </p>
            <p className="exo mt-8 text-gray-700 text-md lg:text-lg ">
              It is that easy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
