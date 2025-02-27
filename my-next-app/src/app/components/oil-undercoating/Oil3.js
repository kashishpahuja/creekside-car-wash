import Link from "next/link";
import React from "react";

function Oil() {
  return (
    <div className="relative z-20 mb-24 py-12"  style={{
      backgroundImage: `url('/Images/oil/oilBG.webp')`,
      // backgroundPosition: "center",
      backgroundSize: "cover",
    }} >
        {/* <div
          className="absolute top-0 inset-0 bg-black bg-opacity-80 rounded-xl"
          aria-hidden="true"
        ></div> */}
    <div className="relative z-20  py-24 px-6 md:px-12 xl:px-32">
      {/* <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-gray-700 text-center">
      Benefits of Oil Undercoating
      </h3>
      <h3 className="montserrat text-sm  lg:text-md font-bold text-gray-600 text-center my-6 ">
      With our experienced technicians and advanced equipment and solutions, you can be sure that we can complete your vehicle’s oil undercoating service quickly and effectively. Here are some of the benefits of scheduling an oil undercoating service at AC Auto:
      </h3> */}
      <div className="flex items-center gap-12 justify-start flex-col xl:flex-row  relative z-30 px-4 md:px-8    w-full  text-black   ">
      {/* <div className=" w-full xl:w-1/2 ">
          <img
            src="/Images/oil/1.webp"
            alt=""
            className=" w-full h-[100%] object-contain "
          />
        </div> */}
       <div className="w-full md:w-1/2 text-center ">
       <div className="">
       <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-white">
       Top-Quality Oil Undercoating In Wakefield, MA
      </h3>
          
          <p className="exo mt-8 text-gray-100 text-sm md:text-md lg:text-lg ">
          Give your vehicle&apos;s underside an extra layer of protection by scheduling an oil undercoating at AC Auto. We only use top-quality oil-based undercoat products that can efficiently protect your vehicle against rust, corrosion, and abrasions. Our technicians are highly trained to ensure the job is done right — allowing you to give your vehicle the extra protection it deserves.
          <br /> <br />
          <Link href={'/contact'} className="exo cursor pointer text-md lg:text-lg      hover:underline  text-red-700  mt-8 ">
        Call Creekside Car Wash
          </Link>
          {" "} today to schedule an oil-based undercoating for cars.
          </p>
        </div>
       
        </div> 

   
      </div>
      

 
   
    </div>
    </div>
  );
}

export default Oil;
