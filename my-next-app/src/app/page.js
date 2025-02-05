'use client';


import Banner from "./components/Banner3";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Blog from "./components/Blogs";
import Circle from "./components/Circle";
import Bay from "./components/Bay";
import Gift from "./components/Gift";
import ContactPopup from './components/ContactPopup'



export default function Home() {

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
