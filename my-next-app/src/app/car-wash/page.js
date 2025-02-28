"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/car-wash/Banner";
import Packages from "../components/car-wash/Packages";
import Rewash from "../components/car-wash/Rewash";
import Features from "../components/car-wash/Features";
import Bay from "../components/car-wash/Bay";


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner />
        <Bay/>
        <Packages/>
        <Rewash/>
        <Features/>
      </main>
    </div>
  );
}
