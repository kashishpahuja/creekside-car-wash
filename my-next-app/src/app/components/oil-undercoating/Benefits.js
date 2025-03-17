




import Image from "next/image";
import Link from "next/link";
import React from "react";

function Oil() {
  return (
    <div   className="relative z-20"  
    // style={{
    //   backgroundImage: `url('/Images/oil/full.webp')`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
     >
        {/* <div
          className="absolute top-0 inset-0 bg-black bg-opacity-80 rounded-xl"
          aria-hidden="true"
        ></div> */}


    <div className="relative z-20  text-center py-24 px-4 md:px-12 xl:px-32"
    >
    
   
      <h3 className="montserrat text-3xl  lg:text-4xl font-bold text-black ">
      Benefits of Oil Undercoating
      </h3>
      <h3 className=" text-sm mx-6 xl:mx-20 lg:text-lg font-bold text-gray-700 text-justify lg:text-center my-8 ">
      With our experienced technicians and advanced equipment and solutions, you can be sure that we can complete your vehicle&apos;s oil undercoating service quickly and effectively. Here are some of the benefits of scheduling an oil undercoating service at AC Auto:
      </h3>
      <div className=" text-black ">
      <div className="flex items-start justify-center flex-wrap xl:flex-nowrap gap-12 md:gap-8 lg:gap-0">
        {/* Feature 1: Flexible Washing Options */}
        <div className="w-full flex flex-col items-center justify-center gap-2">
        {/* <Image src={'/Images/oil/3.webp'} alt="" width={200} height={200} className="zoom rounded-full w-[300px] h-[300px] object-cover"/> */}
          <div className="text-center p-6 ">
            <h3 className="montserrat text-xl lg:text-2xl font-semibold text-gray-900 text-left lg:text-center">
            Rust and Corrosion Protection

            </h3>
            <p className="exo mt-4 text-gray-800 text-sm lg:text-lg font-semibold text-justify">
            Oil undercoating is a highly efficient solution to keep your car safe against corrosion and rust. This solution works by acting like an invisible armor, shielding your vehicle’s underside from the elements that could cause it to degrade over time. By choosing the expert technicians at AC Auto to handle your oil undercoating, you can be sure that your vehicle will get reliable protection against moisture, salt, and other corrosive substances.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2">
        {/* <Image src={'/Images/oil/4.webp'} alt="" width={200} height={200} className="zoom rounded-full w-[300px] h-[300px] object-cover"/> */}
        
        <div className="text-center p-6 ">
          <h3 className="montserrat text-xl lg:text-2xl font-semibold text-gray-900 text-left lg:text-center">
          Prolonged Vehicle&apos;s Lifespan
          </h3>
          <p className="exo mt-4 text-gray-800 text-sm lg:text-lg font-semibold text-justify">
          By preventing rust and corrosion from forming on your vehicle&apos;s undercarriage, oil undercoating can help prevent damage to other important components of your vehicle – including the brakes, suspension, and exhaust system. This keeps your vehicle in optimal condition and running like new — extending its lifespan.
          </p>
        </div>
      </div> 
       <div className="w-full flex flex-col items-center justify-center gap-2">
      {/* <Image src={'/Images/oil/bg.webp'} alt="" width={200} height={200} className="zoom rounded-full w-[300px] h-[300px] object-cover"/> */}
        
        <div className="text-center p-6 ">
          <h3 className="montserrat text-xl lg:text-2xl font-semibold text-gray-900 text-left lg:text-center">
          Long-Lasting Results
          </h3>
          <p className="exo mt-4 text-gray-800 text-sm lg:text-lg font-semibold text-justify">
          At AC Auto, customer satisfaction is our priority. Unlike other auto shops, we only use superior-quality materials in our oil undercoating services. From vehicle preparation to application and final undercoating touches, you can rely on our oil undercoating specialists to leave no area uncovered. This guarantees long-term protection against corrosion, rust, and other environmental hazards.
          </p>
        </div>
      </div>

    

   
      </div>
    </div>
      

 
   
    </div>

    <Image src={'/Images/oil/5.webp'} alt="" width={400} height={400} className="w-full h-[500px] object-cover"/>

    </div>
  );
}

export default Oil;
