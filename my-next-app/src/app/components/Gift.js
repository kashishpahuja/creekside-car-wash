import React from "react";
import GiftCards from '../components/GiftCards'
import Link from 'next/link'
import Image from "next/image";

function Gift() {
  return (
    <div
      // style={{
      //   backgroundImage: `url('/Images/gift/bg.webp')`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      className=" relative z-20 my-24  overflow-hidden  bg-[#1f1e1f] pb-12 lg:py-16"
    >
      {/* <div
        className="absolute inset-0 bg-[#acd5da] bg-opacity-70 rounded-xl"
        aria-hidden="true"
      ></div> */}
      <div className="my-12 flex items-center justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8 lg:px-24 2xl:px-40 w-full  text-black  rounded-xl">
        <Link href={'/gift-card'} className="zoom:hover w-full 2xl:w-[40%] h-[300px] lg:h-[500px] ">
          <Image
          width={400}
          height={400}
            src="/Images/gift/card0.webp"
            alt=""
            className=" w-full 2xl:w-fit h-[100%] object-contain"
          />
        </Link>
        <div className="text-center lg:pb-8 2xl:w-[70%] ">
          <h3 className="montserrat text-3xl  xl:text-5xl text-white">
            JOIN YOUR COMMUNITY CAR WASH
          </h3>
          <p className="montserrat my-8 text-lg lg:text-2xl  text-gray-200">
            Get Creekside&apos;s prepaid wash cards in 2 easy steps!
          </p>
          <div className="xl:w-[800px] mx-auto">
            <p className="exo  text-gray-300 text-md lg:text-lg text-justify">
              Simply choose a denomination (savings included) and proceed to the
              secure checkout screen. You will receive a confirmation email and
              we will have your card or fob ready for pickup in 24hrs. For all
              return customers, simply come see an attendant to recharge the
              card.
            </p>
            <p className="exo mt-8 text-gray-300 text-md lg:text-lg ">
              It is that easy!
            </p>
            <p className="mt-12">
          <Link href={'/gift-card'} className="montserrat mx-auto text-xl lg:text-xl bg-white hover:bg-[#1f1e1f] text-[#1f1e1f] hover:border-2 hover:border-white hover:text-white py-4 px-2  rounded-xl  ">
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
