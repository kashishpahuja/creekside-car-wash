"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
// import Progress from '../components/Progress';
import Blogs from '../components/blogs/All';


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' BLOGS'}/>
        <Blogs/>
        {/* <Progress/> */}
      </main>
    </div>
  );
}
