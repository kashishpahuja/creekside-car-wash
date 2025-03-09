"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/DetailingBanner";
import Progress from '../components/Progress'
import Booking from "../components/detailing/Booking";
import Step1 from '../components/detailing/Step1'
import Step2 from '../components/detailing/Step2'
import Step3 from '../components/detailing/Step3'




export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' CREEKSIDE DETAILING'}/>
        <Step1/>
        <Step2/>
<Step3/>
        {/* <Booking/> */}
      </main>
    </div>
  );
}
