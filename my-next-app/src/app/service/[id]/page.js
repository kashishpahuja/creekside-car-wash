"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import SongsList from "../../components/albums/Songs"; // Import the SongsList component

async function fetchAlbumData(id) {
  const albums = [
    {
      id: "1",
      title: "DJ Christopher Johnson",
      description: "Live set from UV Studio, USA",
      songs: [
        { name: "Track 1", writer: "Writer A", image: "/Images/bannerBG2.jpg" },
        { name: "Track 2", writer: "Writer B", image: "/Images/bannerBG2.jpg" },
        { name: "Track 3", writer: "Writer C", image: "/Images/bannerBG2.jpg" },
      ],
      bannerImage: "/Images/album4.webp",
    },
    {
      id: "2",
      title: "DJ Sarah Parker",
      description: "Live set from NY Studio, USA",
      songs: [
        { name: "Track A", writer: "Writer X", image: "/Images/bannerBG2.jpg" },
        { name: "Track B", writer: "Writer Y", image: "/Images/bannerBG2.jpg" },
        { name: "Track C", writer: "Writer Z", image: "/Images/bannerBG2.jpg" },
      ],
      bannerImage: "/Images/album3.webp",
    },
    {
      id: "3",
      title: "DJ Live Session",
      description: "Special event mix",
      songs: [
        { name: "Mix 1", writer: "Writer M", image: "/Images/bannerBG2.jpg" },
        { name: "Mix 2", writer: "Writer N", image: "/Images/bannerBG2.jpg" },
        { name: "Mix 3", writer: "Writer O", image: "/Images/bannerBG2.jpg" },
      ],
      bannerImage: "/Images/album1.webp",
    },
    {
      id: "4",
      title: "DJ Live Session",
      description: "Special event mix",
      songs: [
        { name: "Mix 1", writer: "Writer M", image: "/Images/bannerBG2.jpg" },
        { name: "Mix 2", writer: "Writer N", image: "/Images/bannerBG2.jpg" },
        { name: "Mix 3", writer: "Writer O", image: "/Images/bannerBG2.jpg" },
      ],
      bannerImage: "/Images/album1.webp",
    },
  ];

  return albums.find((album) => album.id === id) || null;
}

export default function AlbumPage({ params }) {
  const router = useRouter();

  const [albumData, setAlbumData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;

      const data = await fetchAlbumData(id);
      if (!data) {
        router.push("/404");
      } else {
        setAlbumData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [params, router]);

  if (loading) {
    return (
      <div className="text-white text-center py-24">
        <p>Loading album data...</p>
      </div>
    );
  }

  if (!albumData) {
    return null;
  }

  return (
    <div className="text-white">
      {/* Banner */}
      <div
        className="relative h-[240px] lg:h-[410px] w-full"
        style={{
          backgroundImage: `url('/Images/services/carWraps.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 top-16 lg:top-32 ">
          <div className="flex flex-col gap-4 items-center justify-center  ">
            <h3 className="montserrat text-3xl lg:text-5xl text-white">
              {/* {albumData.title} */}
              Auto Care Wash
            </h3>
            <Link href={"/contact"} className="exo-bold p-2 lg:px-6 lg:py-4 border-white border text-white hover:text-black hover:bg-white"
            >
              Book Now
            </Link>
            {/* <h3 className="exo text-lg lg:text-xl text-gray-300">
               {albumData.description} 
              South Surrey and White Rock's Favourite Auto Care Shop Since 2004
            </h3> */}
          </div>
        </div>
      </div>

      {/* SongsList Component */}
      {/* //   <SongsList songs={albumData.songs} /> */}
    </div>
  );
}
