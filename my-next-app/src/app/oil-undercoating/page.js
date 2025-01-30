"use client";
import Link from "next/link";
import React, { useState } from "react";
import Banner from "../components/oil-undercoating/Banner";
import Oil from "../components/oil-undercoating/Oil";
import Benefits from "../components/oil-undercoating/Benefits";
import Why from "../components/oil-undercoating/Why";

export default function AlbumPage() {
  return (
    <div className="">
      <main>
        <Banner />
        <Why />

        <Oil />
        <Benefits />
      </main>
    </div>
  );
}
