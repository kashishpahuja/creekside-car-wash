"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
import GiftCards from "../components/GiftCards";


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={'GIFT CARDS'}/>
        <GiftCards/>
      </main>
    </div>
  );
}
