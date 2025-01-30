import Link from "next/link";
import React from "react";

function Oil() {
  return (
    <div className="bg-gray-200  py-24 px-6 md:px-12 xl:px-32">
      {/* <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-gray-700 text-center">
      Benefits of Oil Undercoating
      </h3>
      <h3 className="montserrat text-sm  lg:text-md font-bold text-gray-600 text-center my-6 ">
      With our experienced technicians and advanced equipment and solutions, you can be sure that we can complete your vehicle’s oil undercoating service quickly and effectively. Here are some of the benefits of scheduling an oil undercoating service at AC Auto:
      </h3> */}
      <div className="flex items-center gap-12 justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8    w-full  text-black   ">
   
       <div className="w-full xl:w-1/2 text-center lg:pb-8">
       <div className="">
       <h3 className="montserrat text-2xl lg:text-4xl text-black text-center ">
       Get Access to High-Quality Oil Undercoating Services
      </h3>
          
          <p className="exo mt-8 text-gray-700 text-sm md:text-md lg:text-lg ">
          Experience high-quality oil undercoating services at AC Auto. Our team of experienced auto technicians will make sure that your vehicle is treated with the utmost care. We have years of experience providing comprehensive oil undercoating services for a wide range of vehicles. You can count on our team to deliver a service that will keep your car or truck in pristine condition for years to come.
          <br />
          Get in touch with AC Auto to schedule an appointment today or visit us at {" "}
          <Link href={'/contact'} className="exo cursor pointer text-md lg:text-lg      hover:underline  text-red-700  mt-8 ">
            32721 Logan Ave Mission BC V2V6K7
          </Link>
         
          </p>
        </div>
       
        </div> 
        <div className=" w-full xl:w-1/2 ">
          <img
            src="/Images/oil/2.png"
            alt=""
            className=" w-full h-[100%] object-contain "
          />
        </div>
   
      </div>
      

 
   
    </div>
  );
}

export default Oil;
