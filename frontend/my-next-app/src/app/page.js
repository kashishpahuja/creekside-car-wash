import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <main className="">
        <Navbar/>
        <Banner/>
      </main>
      
    </div>
  );
}
