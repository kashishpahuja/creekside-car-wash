"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/CommonBanner";
import Progress from '../components/Progress'


export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner title={' FAQ'}/>
        <Progress/>
      </main>
    </div>
  );
}
