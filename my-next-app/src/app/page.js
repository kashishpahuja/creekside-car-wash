import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Blog from './components/Blogs'
import Circle from './components/Circle'
import Bay from "./components/Bay";
import Gift from "./components/Gift";


export default function Home() {
  return (
    <div>
      <main className="">
        {/* <Navbar/> */}
        <Banner/>
        <Circle/>


        {/* <Cards/> */}
   
        <Services/>
        <Bay/>
          <Blog/>
          <Gift/>
      </main>
      
    </div>
  );
}
