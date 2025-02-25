

"use client";
import Link from "next/link";
import React,{useEffect} from "react";




export default function AlbumPage() {
    useEffect(() => {
      // Dynamically add Calendly script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);

  // const openCalendlyPopup = () => {
  //   if (window.Calendly) {
  //     window.Calendly.initPopupWidget({ url: "https://calendly.com/creeksidedetailz" });
  //   } else {
  //     console.error("Calendly script is not loaded.");
  //   }
  // };

  const openCalendlyPopup = () => {
    window.open("https://calendly.com/creeksidedetailz", "_blank");
  };

  return (

    <div className="text-black bg-black ">
            <main>
      <div
        className="relative h-[380px] lg:h-[500px] w-full"
        style={{
          backgroundImage: `url('/Images/bannerCar.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 flex items-center justify-center h-[100%] ">
          <div className="flex flex-col gap-4 lg:items-start">
            <h1 className="hidden md:block montserrat text-2xl md:text-3xl lg:text-5xl text-white text-center">
              
           CREEKSIDE CAR WASH
            </h1>
            <h1 className="block md:hidden montserrat text-2xl md:text-3xl lg:text-5xl text-white text-center">
              
              CREEKSIDE <br/> CAR WASH
               </h1>
            {/* <Link href={"/contact"} className="exo-bold p-2 lg:px-4 py-3 border border-white mx-auto text-white rounded-xl  hover:text-black hover:bg-white"
            >
              <div className="montserrat text-lg lg:text-xl"> Book Now
                </div>
            </Link> */}
             <button
                className="exo-bold w-full"
                onClick={openCalendlyPopup}
              >
                <div className="montserrat text-md lg:text-xl  border  border-white p-2 lg:px-4 py-3 mx-auto inline-block rounded-xl w-fit text-white  hover:text-black hover:bg-white">Book Now</div>
              </button>
         
          </div>
        </div>
      </div>

    
      </main>
    </div>

  );
}
