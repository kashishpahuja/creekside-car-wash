import Link from "next/link";
import React from "react";

function Oil() {
  return (
    <div   className="relative z-20"  style={{
      backgroundImage: `url('/Images/oil/bg.webp')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }} >
        <div
          className="absolute top-0 inset-0 bg-black bg-opacity-80 rounded-xl"
          aria-hidden="true"
        ></div>
    <div className="relative z-20  text-center py-24 px-6 md:px-12 xl:px-60"
    >
    
   
      <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-white text-center">
      Benefits of Oil Undercoating
      </h3>
      <h3 className=" text-sm mx-6 xl:mx-20 lg:text-lg font-bold text-gray-100 text-center my-8 ">
      With our experienced technicians and advanced equipment and solutions, you can be sure that we can complete your vehicle’s oil undercoating service quickly and effectively. Here are some of the benefits of scheduling an oil undercoating service at AC Auto:
      </h3>
      <div className=" text-black ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-0">
        {/* Feature 1: Flexible Washing Options */}
        <div className="flex flex-col items-center justify-center gap-4">
        
          <div className="text-center p-6 bg-gray-100">
            <h3 className="montserrat text-2xl font-semibold text-black">
            Rust and Corrosion Protection

            </h3>
            <p className="exo mt-8 text-gray-800 text-sm lg:text-lg font-semibold">
            Oil undercoating is a highly efficient solution to keep your car safe against corrosion and rust. This solution works by acting like an invisible armor, shielding your vehicle’s underside from the elements that could cause it to degrade over time. By choosing the expert technicians at AC Auto to handle your oil undercoating, you can be sure that your vehicle will get reliable protection against moisture, salt, and other corrosive substances.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
        
        <div className="text-center p-6 bg-gray-300">
          <h3 className="montserrat text-2xl font-semibold text-black">
          Rust and Corrosion Protection

          </h3>
          <p className="exo mt-8 text-gray-800 text-sm lg:text-lg font-semibold">
          Oil undercoating is a highly efficient solution to keep your car safe against corrosion and rust. This solution works by acting like an invisible armor, shielding your vehicle’s underside from the elements that could cause it to degrade over time. By choosing the expert technicians at AC Auto to handle your oil undercoating, you can be sure that your vehicle will get reliable protection against moisture, salt, and other corrosive substances.
          </p>
        </div>
      </div>  <div className="flex flex-col items-center justify-center gap-4">
        
        <div className="text-center p-6 bg-gray-100">
          <h3 className="montserrat text-2xl font-semibold text-black">
          Rust and Corrosion Protection

          </h3>
          <p className="exo mt-8 text-gray-800 text-sm lg:text-lg font-semibold">
          Oil undercoating is a highly efficient solution to keep your car safe against corrosion and rust. This solution works by acting like an invisible armor, shielding your vehicle’s underside from the elements that could cause it to degrade over time. By choosing the expert technicians at AC Auto to handle your oil undercoating, you can be sure that your vehicle will get reliable protection against moisture, salt, and other corrosive substances.
          </p>
        </div>
      </div>

    

   
      </div>
    </div>
      

 
   
    </div>
    </div>
  );
}

export default Oil;
