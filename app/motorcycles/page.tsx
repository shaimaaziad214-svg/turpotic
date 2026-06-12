"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const motorcycles = [
  {
    name: "ZXR RACE",
    price: "$148,500",
     category: "SUPER SPORT",
    image:
      "/turpotic/images/Gemini_Generated_Image_2dj09w2dj09w2dj0-removebg-preview 1.png",
  },
  {
    name: "DUCATI V4",
    price:
      "$276,000",
      category: "GRAND TOURING",
    image:
      "/turpotic/images/vecteezy_sleek-red-ducati-streetfighter-sports-motorcycle-with_55130500 1.png",
  },
  {
    name: "BLACK EDITION",
    price: "$139,900",
    category: "ELECTRIC",
    image:
      "/turpotic/images/vecteezy_black-motorcycle-motorbike-on-white-transparent-background_44267099 1.png",
  },
  {
    name: "SKY BLUE",
    price: "$165,500",
    category: "ELECTRIC",
    image: "/turpotic/images/motorcycle_listing_new 1.png",
  },
  {
    name: "GOLD SPORT",
    price: "$102,500",
    category: "SUPER SPORT",
    image:
      "/turpotic/images/vecteezy_sleek-and-powerful-gold-sportbike-motorcycle_59048178 1.png",
  },
  {
    name: "RED DRAGON",
    price: "$104,500",
    category: "LUXURY SUV",
    image:
      "/turpotic/images/vecteezy_red-motorbike-on-transparent-background_45979852 1.png",
  },
];

export default function MotorcyclePage() {

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL MODELS");
          const filteredMotorcycles = motorcycles.filter((bike) => {
  const matchesSearch =
    bike.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    activeCategory === "ALL MODELS"
      ? true
      : bike.category === activeCategory;

  return matchesSearch && matchesCategory;
});

  

  
  return (
    <main className="min-h-screen bg-[#F4F6FC]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 bg-white">

        <h1 className="text-4xl font-black italic">
          <span className="text-black">TURPO</span>
          <span className="text-blue-500">TIC</span>
        </h1>

        <ul className="flex gap-8 text-gray-500 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/car">Car</Link></li>
          <li><Link href="/rent">Rent</Link></li>
          <li className="text-blue-500 font-semibold">
            <Link href="/motorcycles">Motorcycles</Link>
          </li>
        </ul>

        <div className="flex gap-5 text-xl">
          <button
  onClick={() => {
    document
      .getElementById("search-box")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="hover:scale-110 transition"
>
  🔍
</button>
          <Link href="/cart">
   <button className="hover:scale-110 transition">🛒</button>
</Link>
          <Link href="/profile">
   <button className="hover:scale-110 transition">👤</button>
</Link>
        </div> 
      </nav>

      {/* Hero */}
      <section id="bikes"  className="relative overflow-hidden">

        <div className="grid lg:grid-cols-[52%_48%] min-h-[750px]">

          <div className="bg-[#02112C] text-white px-12 py-20">

            <h1 className="text-7xl font-black leading-none">
              PRECISION
              <br />
              TWO-WHEELS.
            </h1>

            <p className="mt-10 max-w-md text-gray-300 text-lg leading-8">
              Curated selection of performance engineering
              and timeless aesthetics.
              From Italian speedsters to custom cruisers.
            </p>
             <a
  href="#bikes"
  className="mt-12 inline-block rounded-2xl bg-[#DCE7FF] px-12 py-4 font-semibold text-[#041533]"
>
  Get Started
</a>
          </div>

          <div className="relative bg-[#F4F6FC] flex items-center justify-center">

            <h2 className="absolute right-12 top-1/2 -translate-y-1/2 text-[82px] leading-[0.95] font-black text-[#0A1D3E] z-10">
              Sell your
              <br />
              <span className="text-[#6483FF]">
                Motorcycle
              </span>
            </h2>

           <Image
  src="/turpotic/images/Gemini_Generated_Image_2dj09w2dj09w2dj0-removebg-preview 1.png"
  alt="Motorcycle"
  width={400}
  height={400}
  className="
  absolute
  left-[3%]
  top-[75%]
  -translate-x-1/2
  -translate-y-1/2
  z-20
  drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]
  transition-all
  duration-500
  hover:scale-105
  "
/>

          </div>

        </div>
</section>
<section className="px-10 pt-10">

  <input
  id="search-box"
    type="text"
    placeholder="Search Motorcycles..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
    w-full
    rounded-2xl
    bg-white
    border
    border-gray-300
    px-6
    py-4
    text-[#02112C]
    shadow-md
    outline-none
    focus:border-[#6483FF]
    "
  />

</section>

{/* Filters */}
<section className="px-12 py-10  ">

<div className="flex flex-wrap gap-4">

  {[
    "ALL MODELS",
    "ELECTRIC",
    "GRAND TOURING",
    "SUPER SPORT",
    "LUXURY SUV",
  ].map((item) => (
<button
  key={item}
  onClick={() => setActiveCategory(item)}
  className={`rounded-full px-7 py-3 text-sm font-medium transition-all duration-500 ${
    activeCategory === item
      ? "bg-[#001244] text-[#344054] shadow-lg"
      : "bg-[#DCE4F2] text-[#344054] hover:bg-[#D0DBF2]"
  }`}
>
  {item}
</button>
  ))}

</div>

  {/* Brand + Price */}
  <div className="mt-10 flex items-center justify-between">

    <div className="flex gap-5">

      <button
        className="
        rounded-full
        bg-[#D7E1F2]
        px-7
        py-3
        text-sm
        font-medium
        text-[#1F2937]
        border
        border-[#C8D5EB]
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#C9D8F2]
        transition-all duration-500 transition hover:scale-105
        "
      >
        BRAND: ALL ⌄
      </button>

      <button
        className="
        rounded-full
        bg-[#D7E1F2]
        px-7
        py-3
        text-sm
        font-medium
        text-[#1F2937]
        border
        border-[#C8D5EB]
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#C9D8F2]
        transition-all duration-500 transition hover:scale-105
        "
      >
        PRICE: HIGH TO LOW ↑↓
      </button>

    </div>

    <span
      className="
      text-xs
      tracking-[4px]
      font-semibold
      uppercase
      text-[#6B7280]
      "
    >
      SHOWING 24 RESULTS
    </span>

  </div>

</section>

      {/* Cards */}
      <section id="bikes" className="px-10 pb-20">

        <div className="grid lg:grid-cols-3 gap-10">



{filteredMotorcycles.map((bike) => (        
    
    <div
              key={bike.name}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              bg-white
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-4
              hover:shadow-2xl
              "
            >

              <div className="relative bg-gradient-to-b from-black to-[#12203A] p-8 h-[340px] flex items-center justify-center">

                <Image
                  src={bike.image}
                  alt={bike.name}
                 width={250}
                  height={180}
                  className="
                  h-[180px]
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-2
                  "
                />

                <div
                  className="
                  absolute
                  bottom-8
                  right-8
                  rounded-full
                  bg-white
                 px-10
                  py-4
                  shadow-xl
                  border
                  border-gray-200
                  transition-all
                  duration-500
                  group-hover:bg-[#0B1F3A]
                  group-hover:scale-110
                  "
                >
                  <p
                    className="
                    text-[#0B1F3A]
                    text-2xl
                    font-bold
                    transition-all
                    duration-500
                    group-hover:text-white
                    "
                  >
                    {bike.price}
                  </p>
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-[30px] font-bold text-[#091B3D]">
                  {bike.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  HERITAGE SILVER | 2024
                </p>

                <div className="mt-5 flex gap-2">

                  <span className="rounded-full bg-[#D7E1F2]px-3 py-1 text-gray-400">
                    4.5s
                  </span>

                  <span className="rounded-full bg-[#D7E1F2] px-3 py-1 text-gray-400">
                    503 HP
                  </span>

                </div>

               <Link
  href={`/motorcycle-details?name=${bike.name}&price=${bike.price}&image=${bike.image}`}
>
  <button className="mt-8 w-full rounded-2xl bg-[#03173B] py-4 text-white font-semibold">
    VIEW DETAILS
  </button>
</Link>

                

              </div>

            </div>
          ))}

        </div>

      </section>
      <section className="pb-24 text-center">
<Link href="/car">
  <button
    className="
    rounded-full
    bg-[#D9E5FF]
    px-14
    py-5
    text-xs
    tracking-[4px]
    font-semibold
    text-[#091B3D]
    transition-all duration-500 transition hover:scale-105
    "
  >
    EXPLORE MORE INVENTORY →
  </button>
  </Link>

  <p className="mt-5 text-xs tracking-[3px] text-gray-500">
    PAGE 1 OF 4
  </p>

</section>

        {/* Footer */}
    
<footer className="bg-white px-12 py-20">
  <div className="grid grid-cols-4 gap-12 items-start">

    <div>
      <h3 className="text-lg font-bold">
        <span className="text-black">TURPO</span>
        <span className="text-blue-500">TIC</span>
      </h3>

      <p className="mt-4 text-sm text-gray-500 max-w-[220px]">
        Redefining the automotive experience through
        curated excellence and technical precision.
      </p>
    </div>

    <div>
      <h4 className="text-sm font-semibold text-[#0B1F3A] mb-4">
        GALLERY
      </h4>

      <ul className="space-y-3 text-sm text-gray-500">
        <li>Sale</li>
        <li>Rent</li>
        <li>Motorcycles</li>
      </ul>
    </div>

    <div>
      <h4 className="text-sm font-semibold text-[#0B1F3A] mb-4">
        SUPPORT
      </h4>

      <ul className="space-y-3 text-sm text-gray-500">
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>

    <div className="text-right text-sm text-gray-600">
      © 2026 TURPOTIC GALLERY.
      <br />
      PRECISION MOTION DEFINED.
    </div>

  </div>
</footer>

    </main>
  );
}