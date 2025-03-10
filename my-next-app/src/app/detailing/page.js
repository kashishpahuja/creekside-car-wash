"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/DetailingBanner";
import Progress from '../components/Progress'
import Booking from "../components/detailing/Booking";
import Step1 from '../components/detailing/Step1'
import Step2 from '../components/detailing/Step2'
import Step3 from '../components/detailing/Step3'
import Step4 from '../components/detailing/Step4'
import StepsContainer from "../components/detailing/StepsContainer";





export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' CREEKSIDE DETAILING'}/>
<StepsContainer/>
        {/* <Step1/>
        <Step2/>
<Step3/>
<Step4/> */}
        {/* <Booking/> */}
      </main>
    </div>
  );
}
