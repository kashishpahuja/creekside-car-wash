"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
// import Progress from '../components/Progress'
import Fleet from '../components/fleet/Form'
import Features from "../components/fleet/Features";
import Main from "../components/fleet/Main";



export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' FLEET ACCOUNTS'}/>

        {/* <Main/> */}
        {/* <Features/> */}
        <Fleet/>
        {/* <Progress/> */}
      </main>
    </div>
  );
}
