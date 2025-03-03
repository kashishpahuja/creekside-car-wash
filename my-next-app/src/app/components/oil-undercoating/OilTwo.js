import Image from "next/image";
import Link from "next/link";
import React from "react";

function Oil() {
  return (
    <div className="  py-24 px-6 md:px-12 xl:px-32">
      {/* <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-gray-700 text-center">
      Benefits of Oil Undercoating
      </h3>
      <h3 className="montserrat text-sm  lg:text-md font-bold text-gray-600 text-center my-6 ">
      With our experienced technicians and advanced equipment and solutions, you can be sure that we can complete your vehicle’s oil undercoating service quickly and effectively. Here are some of the benefits of scheduling an oil undercoating service at AC Auto:
      </h3> */}
      <div className="flex items-center gap-12 justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8    w-full  text-black   ">
      <div className=" w-full xl:w-1/2 ">
          <Image  width={400} height={400} 
            src="/Images/oil/2.webp"
            alt=""
            className=" w-full h-[100%] object-contain "
          />
        </div>


       <div className="w-full xl:w-1/2 text-center lg:pb-8">
       <div className="">
       <h3 className="montserrat text-2xl lg:text-4xl text-black text-center ">
       Why Oil Undercoating for Cars Is Important
      </h3>
          
          <p className=" mt-6 text-gray-700 text-sm md:text-lg lg:text-xl text-justify lg:text-center font-semibold">
          The underside or undercarriage of your vehicle is exposed to things like dirt, salt, moisture, ice, and other harsh elements from the road. Over time, these harsh elements can cause corrosion and rust, which can lead to damage and costly repairs.
          <br />          <br />
To protect your vehicle from these elements, oil undercoating is a great option. It is a protective coating solution that creates a barrier between your vehicle and the environment, making it more resistant to corrosion and rust. At AC Auto, we guarantee to deliver top-of-the-line oil undercoating services — giving your vehicle long-term protection and allowing you to keep it in great shape for years to come.

         
         
          </p>
        </div>
       
        </div> 
       
   
      </div>
      

 
   
    </div>
  );
}

export default Oil;
