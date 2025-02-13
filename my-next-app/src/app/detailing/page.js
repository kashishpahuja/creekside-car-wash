"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/DetailingBanner";
import Progress from '../components/Progress'
import Booking from "../components/Booking";


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' CREEKSIDE DETAILING'}/>
        <Booking/>
      </main>
    </div>
  );
}
