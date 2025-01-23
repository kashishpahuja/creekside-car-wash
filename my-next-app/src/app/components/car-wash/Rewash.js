import Link from "next/link";
import React from "react";

function Rewash() {
  return (
    <div className="bg-gray-200 text-center py-24 px-6 md:px-12 xl:px-32">
      <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-blue-700 text-center">
        REWASH POLICY
      </h3>
      <h3 className="montserrat text-lg  lg:text-xl font-bold text-gray-600 text-center my-6 ">
        Did We Miss A Spot?
      </h3>
      <div className="flex items-center gap-12 justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8    w-full  text-black  rounded-xl ">
        <div className="w-full xl:w-1/2 text-center lg:pb-8">
          <p className="exo  text-gray-700 text-sm md:text-md lg:text-lg ">
            Simply choose a denomination (savings included) and proceed to the
            secure checkout screen. You will receive a confirmation email and we
            will have your card or fob ready for pickup in 24hrs. For all return
            customers, simply come see an attendant to recharge the card.
          </p>
          <p className="exo mt-8 text-gray-700 text-sm md:text-md lg:text-lg ">
            Simply choose a denomination (savings included) and proceed to the
            secure checkout screen. You will receive a confirmation email and we
            will have your card or fob ready for pickup in 24hrs. For all return
            customers, simply come see an attendant to recharge the card.
          </p>
        </div>

        <div className=" w-full xl:w-1/2 rounded-xl">
          <img
            src="/Images/footer.jpg"
            alt=""
            className=" w-full h-[100%] object-contain rounded-xl"
          />
        </div>
      </div>
      

        <Link href={'/faq'} className="exo cursor pointer text-md lg:text-lg  inline-block  border border-blue-700 bg-yellow-400 hover:bg-blue-700 p-2 md:px-4 py-2 rounded-lg  hover:border-yellow-400 hover:text-yellow-400  text-blue-700 text-center mt-8 ">
        Learn More On Our FAQs
          </Link>
   
    </div>
  );
}

export default Rewash;
