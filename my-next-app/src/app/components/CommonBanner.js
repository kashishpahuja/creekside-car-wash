

"use client";
import Link from "next/link";
import React from "react";




export default function AlbumPage({title}) {
  return (

    <div className="text-black bg-black">
            <main>
      <div
        className="relative h-[380px] lg:h-[600px] w-full"
        style={{
          backgroundImage: `url('/Images/services/carWraps.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 top-1/2 left-[40%] inline-block">
          <div className="flex flex-col gap-4 items-start  ">
            <h1 className="montserrat text-3xl lg:text-5xl text-white">
              
            {title}
            </h1>
            <Link href={"/contact"} className="exo-bold p-2 lg:px-4 py-3 border border-white mx-auto text-white rounded-xl  hover:text-black hover:bg-white"
            >
              <div className="montserrat text-lg lg:text-xl"> Book Now
                </div>
            </Link>
         
          </div>
        </div>
      </div>


{/* <div className="w-full h-[400px]">
    <img src="/Images/progress.webp" alt="" className="w-full h-[100%] object-cover"/>
</div> */}
{/* <div className="mx-auto py-24 bg-white">
    <h3 className="montserrat text-2xl lg:text-6xl text-black text-center mb-12">UNDER CONSTRUCTION</h3>
    <p className="montserrat text-xl lg:text-3xl text-red-600 text-center mb-12">COMING SOON.....</p>
</div> */}


    
      </main>
    </div>

  );
}
