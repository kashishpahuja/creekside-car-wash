

// "use client";
// import Link from "next/link";
// import React from "react";




// export default function AlbumPage() {
//   return (

//     <div className="text-black bg-black">
//             <main>
//       <div
//         className="relative h-[380px] lg:h-[600px] w-full"
//         style={{
//           backgroundImage: `url('/Images/services/carWraps.webp')`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <div
//           className="absolute inset-0 bg-black bg-opacity-70"
//           aria-hidden="true"
//         ></div>
//         <div className="relative z-20 top-1/2 left-[30%] inline-block">
//           <div className="flex flex-col gap-4 items-start  ">
//             <h1 className="montserrat text-3xl lg:text-5xl text-white">
              
//           CREEKSIDE OIL UNDERCOATING
//             </h1>
//             <Link 
//             href={"/contact"}
//              className="exo-bold p-2 lg:px-4 py-3 border border-white mx-auto text-white rounded-xl  hover:text-black hover:bg-white"
//             >
//               <div className="montserrat text-lg lg:text-xl"> Book Now
//                 </div>
//             </Link>
         
//           </div>
//         </div>
//       </div>

    
//       </main>
//     </div>

//   );
// }


"use client";
import { useEffect } from "react";

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
            backgroundImage: `url('/Images/services/detailing.webp')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70" aria-hidden="true"></div>
          <div className="relative z-20 flex items-center justify-center h-[100%] ">
            <div className="flex flex-col gap-4 lg:items-start">
              <h1 className="montserrat text-2xl md:text-3xl lg:text-5xl text-white text-center">
                CREEKSIDE <br /> OIL UNDERCOATING
              </h1>
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
