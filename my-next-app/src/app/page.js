'use client';


import Banner from "./components/Banner3";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Blog from "./components/Blogs";
import Circle from "./components/Circle";
import Bay from "./components/Bay";
import Gift from "./components/Gift";
import ContactPopup from './components/ContactPopup'
import GiftCards from './components/GiftCards'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
    // Initialize AOS when the component mounts
    useEffect(() => {
      AOS.init({
        duration: 1000, // Duration for each animation
        easing: "ease-in-out", // Easing type
        once: true,
      });
    }, []); // Empty dependency array ensures this only runs once
  return (
    <div>
      <main
        className=""

      >
       
        <div >
        <Banner />
        <Services />
        <Circle />

        <Bay />
        <Blog />
        <Gift />
      {/* <GiftCards/> */}

        <ContactPopup/>
        </div>
      </main>
    </div>
  );
}
