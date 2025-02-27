import React from "react";
import GiftCards from '../components/GiftCards'
import Link from 'next/link'
import Image from "next/image";

function Gift() {
  return (
    <div
      style={{
        backgroundImage: `url('/Images/gift/bg.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" relative z-20 md:mx-4  mx-8 lg:mx-24 my-24  overflow-hidden rounded-xl"
    >
      <div
        className="absolute inset-0 bg-[#acd5da] bg-opacity-70 rounded-xl"
        aria-hidden="true"
      ></div>
      <div className="my-12 flex items-center justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8 lg:px-24 w-full  text-black  rounded-xl">
        <div className="zoom:hover w-full md:h-[500px] ">
          <Image
          width={400}
          height={400}
            src="/Images/gift/card0.webp"
            alt=""
            className=" w-full h-[100%] object-contain"
          />
        </div>
        <div className="text-center lg:pb-8">
          <h3 className="montserrat text-3xl  xl:text-5xl text-black">
            JOIN YOUR COMMUNITY CAR WASH
          </h3>
          <p className="montserrat my-8 text-lg lg:text-2xl  text-gray-800">
            Get Creekside&apos;s prepaid wash cards in 2 easy steps!
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
            <p className="mt-12">
          <Link href={'/gift-card'} className="montserrat mx-auto text-xl lg:text-xl hover:text-red-700 border-white transition-all duration-300 text-white bg-red-700 hover:border-red-600 hover:bg-white py-4 px-2  rounded-xl  ">
      Get Gift Card
      </Link>
      </p>
          </div>
        
        </div>
      </div>
    
      {/* <GiftCards/> */}
    </div>
  );
}

export default Gift;
