"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
import Progress from '../components/Progress'
import Faq from "../components/Faq";


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' FAQ'}/>
        <Faq/>
        {/* <Progress/> */}
      </main>
    </div>
  );
}
