import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Services from "./components Services";


export default function Home() {
  return (
    <div>
      <main className="">
        <Navbar/>
        <Banner/>
        <div className="">
        <Cards/>
        </div>
        

      </main>
      
    </div>
  );
}
