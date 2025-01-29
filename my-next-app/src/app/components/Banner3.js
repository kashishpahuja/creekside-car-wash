'use client';
import React, { useState, useEffect } from "react";


function Banner() {




  return (
    <div className="relative w-full h-[600px] lg:min-h-screen overflow-hidden font-exo ">
      {/* Background Video Section */}
      <div className="absolute inset-0 w-full ">
        <video
          className="w-full h-[100%] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Images/CSC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


    </div>
  );
}

export default Banner;
