"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
import Contact from '../components/ContactPopup'

export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' CONTACT US'}/>
        <Contact/>
      </main>
    </div>
  );
}
