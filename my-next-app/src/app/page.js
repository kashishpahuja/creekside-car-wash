'use client';

import dynamic from 'next/dynamic';
import Banner from "./components/Banner";
import Services from "./components/Services";
const Blog = dynamic(() => import("./components/Blogs"));
const Car = dynamic(() => import("./components/Car"));
const Circle = dynamic(() => import("./components/Circle"));
const Bay = dynamic(() => import("./components/Bay"));
const Gift = dynamic(() => import("./components/Gift"));
const ContactPopup = dynamic(() => import("./components/ContactPopup"));

export default function Home() {
  return (
    <div>
      <main>
        <div>
     
          <Banner />


          <Services />
          <Car/>
          <Circle />

          <Bay />
          <Blog />
          <Gift />
          <ContactPopup />
        </div>
      </main>
    </div>
  );
}
