import React from "react";
import { SiTicktick } from "react-icons/si";

function Packages() {
  return (
    <div className="my-24 mx-8 lg:mx-16 xl:mx-24">
      <h3 className="montserrat text-3xl  lg:text-4xl  text-black text-center">
        OUR PACKAGES
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 pt-12">


        <div className="relative text-center  ">
        <h5 className="montserrat bg-[#183c5e] px-8 text-white font-medium text-lg py-8 rounded-t-xl   mx-auto">
        TOUCHLESS BASE WASH
            </h5>
            <div className="bg-[#edede9] rounded-b-xl py-8">
          <div className="  text-2xl gap-2 flex items-center justify-center  text-[#183c5e] ">
            $<span className="montserrat text-6xl">12.99</span>
          </div>
          <div className="">
            <ul className=" p-6 text-gray-700 font-semibold text-sm md:text-base space-y-4 text-center">
            <li className=" ">2 Step Pre Soak</li>

<li className=" ">High Pressure Rinse (x2)</li>

<li className=" ">Body Shield Wax</li>
<li className=" ">Undercarriage Blast</li>
<li className=" ">Spot Free Rinse</li>
<li className=" ">Dryer</li>

            </ul>
     
          </div>
          </div>
        </div> <div className="relative text-center  ">
        <h5 className="montserrat bg-[#183c5e] px-8 text-white font-medium text-lg py-8 rounded-t-xl   mx-auto">
        TOUCHLESS BETTER WASH
            </h5>
            <div className="bg-[#edede9] rounded-b-xl py-8">
          <div className="  text-2xl gap-2 flex items-center justify-center  text-[#183c5e] ">
            $<span className="montserrat text-6xl">14.99</span>
          </div>
          <div className="">
            <ul className=" p-6 text-gray-700 font-semibold text-sm md:text-base space-y-4 text-center">
            <li className=" ">2 Step Pre Soak</li>

<li className=" ">Triple Foam Conditioner</li>
<li className=" ">High Pressure Rinse (x2)</li>
<li className=" ">Body Shield Wax</li>
<li className=" ">Undercarriage Blast</li>
<li className=" ">Spot Free Rinse</li>
<li className=" ">Dryer</li>

            </ul>
     
          </div>
          </div>
        </div> <div className="relative text-center  ">
        <h5 className="montserrat bg-[#183c5e] px-8 text-white font-medium text-lg py-8 rounded-t-xl   mx-auto">
        TOUCHLESS BEST WASH
            </h5>
            <div className="bg-[#edede9] rounded-b-xl py-8">
          <div className="  text-2xl gap-2 flex items-center justify-center  text-[#183c5e] ">
            $<span className="montserrat text-6xl">19.99</span>
          </div>
          <div className="">
            <ul className=" p-6 text-gray-700 font-semibold text-sm md:text-base space-y-4 text-center">
            <li className=" ">2 Step Pre Soak</li>

<li className=" ">Triple Foam Conditioner</li>
<li className=" ">High Pressure Rinse (x2)</li>
<li className=" ">Body Shield Wax</li>
<li className=" ">Undercarriage Blast</li>
<li className=" ">Spot Free Rinse</li>
<li className=" ">Dryer</li>

            </ul>
     
          </div>
          </div>
        </div>



        <div className="relative text-center  ">
        <h5 className="montserrat bg-[#183c5e] px-8 text-white font-medium text-lg py-8 rounded-t-xl   mx-auto">
              THE WORKS WASH
            </h5>
            <div className="bg-[#edede9] rounded-b-xl py-8">
          <div className="  text-2xl gap-2 flex items-center justify-center  text-[#183c5e] ">
            $<span className="montserrat text-6xl">29.99</span>
          </div>
          <div className="">
            <ul className=" p-6 text-gray-700 font-semibold text-sm md:text-base space-y-4 text-center">
              <li className=" ">**During Attendant hours only</li>

         
              <li className=" ">Bug/salt/bird dropping, wheels, windshields prep</li>
              <li className=" ">Vacuum token worth 4minutes</li>
              <li className=" ">Touchless Premium Wash</li>

            </ul>
     
          </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 pt-32">
        <div className="relative text-center">
          <div className="absolute left-[32%] -top-[82px]">
            <div className="rounded-full bg-[#ee0a00] border ">
              <h3 className="montserrat text-2xl px-4 py-9 text-white">
                $12.99
              </h3>
            </div>
          </div>
          <div className="montserrat text-2xl  px-6 py-12 bg-[#046dfd] text-white rounded-t-2xl">
            Regular Wash
          </div>
          <ul className=" p-6 bg-gray-200 shadow-lg text-gray-700 font-semibold text-sm md:text-md space-y-4">
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />2 Step Pre Soak
            </li>

            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Triple Foam Conditioner
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              High Pressure Rinse (x2)
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Extreme Shine Foam Arch Wash
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Body Shield Wax
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Undercarriage Blast
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Spot Free Rinse
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Dryer
            </li>
          </ul>
        </div>

        <div className="relative text-center mt-24 md:mt-0">
          <div className="absolute left-[32%] -top-[82px]">
            <div className="rounded-full bg-[#5ec24e] border ">
              <h3 className="montserrat text-2xl px-4 py-9 text-white">
                $14.99
              </h3>
            </div>
          </div>
          <div className="montserrat text-2xl  px-6 py-12 bg-[#046dfd] text-white rounded-t-2xl">
            Deluxe Wash
          </div>
          <ul className=" p-6 bg-gray-200 shadow-lg text-gray-700 font-semibold text-sm md:text-md space-y-4">
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />2 Step Pre Soak
            </li>

            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Triple Foam Conditioner
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              High Pressure Rinse (x2)
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Extreme Shine Foam Arch Wash
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Body Shield Wax
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Undercarriage Blast
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Spot Free Rinse
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Dryer
            </li>
          </ul>
        </div>

        <div className="relative text-center   mt-24 xl:mt-0">
          <div className="absolute left-[32%] -top-[82px]">
            <div className="rounded-full bg-yellow-500 border ">
              <h3 className="montserrat text-2xl px-4 py-9 text-white">
                $19.99
              </h3>
            </div>
          </div>
          <div className="montserrat text-2xl  px-6 py-12 bg-[#046dfd] text-white rounded-t-2xl">
            Premium Wash
          </div>
          <ul className=" p-6 bg-gray-200 shadow-lg text-gray-700 font-semibold text-sm md:text-md space-y-4">
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />2 Step Pre Soak
            </li>

            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Triple Foam Conditioner
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              High Pressure Rinse (x2)
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Extreme Shine Foam Arch Wash
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Body Shield Wax
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Undercarriage Blast
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Spot Free Rinse
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Dryer
            </li>
          </ul>
        </div>

        <div className="relative text-center mt-24 xl:mt-0">
          <div className="absolute left-[32%] -top-[82px]">
            <div className="rounded-full bg-[#348a8a] border ">
              <h3 className="montserrat text-2xl px-4 py-9 text-white">
                $29.99
              </h3>
            </div>
          </div>
          <div className="montserrat text-2xl  px-6 py-12 bg-[#046dfd] text-white rounded-t-2xl">
            The Works Wash
          </div>
          <ul className=" p-6 bg-gray-200 shadow-lg text-gray-700 font-semibold text-sm md:text-md space-y-4">
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />2 Step Pre Soak
            </li>

            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Triple Foam Conditioner
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              High Pressure Rinse (x2)
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Extreme Shine Foam Arch Wash
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Body Shield Wax
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Undercarriage Blast
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Spot Free Rinse
            </li>
            <li className="flex items-center gap-2 ">
              <SiTicktick className="w-4  h-4 text-[#ee0a00]" />
              Dryer
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Packages;
