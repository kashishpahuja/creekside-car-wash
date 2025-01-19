import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Services from "./components/Services";
import Blog from './components/Blogs'
import Circle from './components/Circle'


export default function Home() {
  return (
    <div>
      <main className="">
        {/* <Navbar/> */}
        <Banner/>
        <div className="">
        <Circle/>

        </div>

        {/* <Cards/> */}
   
        <Services/>
        <div className="">
          <Blog/>
        </div>
      </main>
      
    </div>
  );
}
