"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
// import Progress from '../components/Progress'
import Fleet from '../components/fleet/Form'


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' FLEET ACCOUNTS'}/>
        <Fleet/>
        {/* <Progress/> */}
      </main>
    </div>
  );
}
