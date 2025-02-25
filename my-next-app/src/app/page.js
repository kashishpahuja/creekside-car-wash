'use client';

import dynamic from 'next/dynamic';

// Import critical components normally (do not lazy-load)
// import Banner from "./components/Banner2";
import Banner from "./components/Banner5";

import Services from "./components/Services";

// Dynamically import non-critical components
const Blog = dynamic(() => import("./components/Blogs"));
const Circle = dynamic(() => import("./components/Circle"));
const Bay = dynamic(() => import("./components/Bay"));
const Gift = dynamic(() => import("./components/Gift"));
const ContactPopup = dynamic(() => import("./components/ContactPopup"));

export default function Home() {
  return (
    <div>
      <main>
        <div>
          {/* Keep critical components static */}
          <Banner />

          {/* Lazy-load non-critical components */}
          <Circle />
          <Services />

          <Bay />
          <Blog />
          <Gift />
          <ContactPopup />
        </div>
      </main>
    </div>
  );
}
