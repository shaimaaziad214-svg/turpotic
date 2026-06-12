
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    name: "911 CARRERAS",
    price: "$450",
    image: "/turpotic/images/porsche.png",
    category: "SPORT",
  },
  {
    name: "F8 TRIBUTO",
    price: "$850",
    image: "/turpotic/images/ferrari.png",
    category: "SPORT",
  },
  {
    name: "VANTAGE V8",
    price: "$750",
    image: "/turpotic/images/bmw.png",
    category: "EXECUTIVE",
  },
];


export default function RentPage() {
  const [activeCategory, setActiveCategory] =
  useState("ALL VEHICLES");

const filteredCars =
  activeCategory === "ALL VEHICLES"
    ? cars
    : cars.filter(
        (car) => car.category === activeCategory
      );

  return (
    <main className="bg-[#F4F6FC] min-h-screen">

          {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 bg-white">

        <h1 className="text-4xl font-black italic">
          <span className="text-black">TURPO</span>
          <span className="text-blue-500">TIC</span>
        </h1>

        <ul className="flex gap-8 text-gray-500 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/car">Car</Link></li>
          <li className="text-blue-500 font-semibold">
            <Link href="/rent">Rent</Link>
          </li>
          <li><Link href="/motorcycles">Motorcycles</Link></li>
        </ul>

      <div className="flex gap-5 text-xl items-center">

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
    <button className="hover:scale-110 transition">
      🛒
    </button>
  </Link>

  <Link href="/profile">
    <button className="hover:scale-110 transition">
      👤
    </button>
  </Link>

</div>

      </nav>

      <section className="overflow-hidden">

        <div className="grid lg:grid-cols-[48%_52%] min-h-[820px]">

          <div className="px-16 py-24 flex flex-col justify-center">

            <span
              className="
              w-fit
              rounded-full
              bg-[#DCE6FF]
              px-6
              py-3
              text-xs
              font-semibold
              tracking-[3px]
              text-[#091B3D]
              "
            >
              PREMIUM PERFORMANCE FLEET
            </span>

            <h1 className="mt-8 text-[86px] font-black leading-[0.9] text-[#091B3D]">
              Rent the
              <br />
              <span className="text-[#6483FF]">
                Extraordinary
              </span>
            </h1>

            <p className="mt-8 max-w-md text-gray-500 text-lg leading-8">
              A curated gallery of automotive masterpieces.
              Where engineering excellence meets unparalleled
              aesthetic design.
            </p>

            <div className="mt-10 flex gap-4">
              <Link href="#cars">
              <button
                className="
                rounded-2xl
                bg-[#03173B]
                px-10
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Explore Fleet
              </button>

              <button
                className="
                rounded-2xl
                bg-[#DCE6FF]
                px-10
                py-4
                font-semibold
                text-[#091B3D]
                transition-all
                duration-300
                hover:scale-105
                "
              >
                View Concierge
              </button>
                </Link>
            </div>

          </div>

          <div className="relative flex items-center justify-center overflow-hidden">

            <div
              className="
              absolute
              w-[650px]
              h-[650px]
              bg-[#DCE6FF]
              rounded-[50px]
              rotate-[10deg]
              "
            />

            <div
              className="
              absolute
              w-[540px]
              h-[540px]
              bg-white
              rounded-[30px]
              shadow-lg
              "
            />

            <Image
              src="/turpotic/images/pngwing.com (2) 1.png"
              alt="Mercedes"
              width={650}
              height={650}
              priority
              className="
              relative
              z-10
              object-contain
              transition-all
              duration-500
              hover:scale-105
              "
            />

          </div>

        </div>

      </section>
      <section id="search-box" className="px-12 py-10 bg-[#F7F8FD]">

  <div className="flex justify-between items-center">

    <div className="flex gap-4">
<div className="flex flex-wrap items-center gap-4">
  {["ALL VEHICLES", "SPORT", "EXECUTIVE", "OFF-ROAD"].map(
    (category) => (
<button
  key={category}
  onClick={() => setActiveCategory(category)}
  style={{
    backgroundColor:
      activeCategory === category
        ? "#001B5E"
        : "#D9E4FF",
    color:
      activeCategory === category
        ? "white"
        : "#1E293B",
    padding: "16px 32px",
    borderRadius: "9999px",
    fontWeight: "600",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  }}
>
  {category}
</button>
    )
  )}
</div>

    </div>

    <span className="text-xs tracking-[3px] text-gray-500">
      SHOWING 24 RESULTS
    </span>

  </div>

</section>

<section id="cars"> className="px-12 pb-20 "

  <div className="grid lg:grid-cols-3 gap-10">

{filteredCars.map((car) => (
      <div
        key={car.name}
        className="
        bg-white
        rounded-[30px]
        overflow-hidden
        shadow-xl
         bg-[#DCE6FF]
        transition-all
        duration-500
        hover:-translate-y-3
        "
      >

        <div className="bg-gradient-to-b from-black to-[#2A2A2A] p-10">

          <Image
            src={car.image}
            alt={car.name}
            width={320}
            height={200}
            className="
            mx-auto
            transition-all
            duration-500
            hover:scale-110
            "
          />

        </div>

   <div className="p-8">

  {/* Title + Price */}
  <div className="flex items-start justify-between">

    <div>
      <h3 className="text-[28px] font-black text-[#091B3D] leading-none">
        {car.name}
      </h3>

      <p className="mt-3 text-[14px] tracking-wide text-[#8A93A8] uppercase">
        HERITAGE SILVER | 2024
      </p>
    </div>

    <div className="text-right">
      <p className="text-[28px] font-bold text-[#6483FF] leading-none">
        {car.price}
      </p>

      <p className="mt-2 text-[11px] uppercase text-[#8A93A8]">
        PER DAY
      </p>
    </div>

  </div>

  {/* Divider */}
  <div className="mt-6 border-t border-[#E6EBF5]" />

  {/* Info */}
  <div className="mt-4 flex justify-between">

    <div>
      <p className="text-[11px] uppercasetext-[#42526E] text-[#8A93A8]">
        Weekly Rate
      </p>

      <p className="mt-2 text-[18px] font-semibold text-[#42526E]">
        $2,800
        <span className="font-normal ttext-[#42526E]ext-[#8A93A8]">
          {" "} / wk
        </span>
      </p>
    </div>

    <div className="text-right">
      <p className="text-[11px] uppercase text-[#42526E]8A93A8]">
        Transmission
      </p>

      <p className="mt-2 text-[18px] font-semibold text-[#42526E]">
        PDK Auto
      </p>
    </div>

  </div>

  {/* Divider */}
  <div className="mt-5 border-t border-[#E6EBF5]" />

  {/* Duration */}
  <p className="mt-5 text-[11px] uppercase tracking-wide text-[#42526E]">
    Select Duration
  </p>

  <div className="mt-4 grid grid-cols-3 gap-2">

   <button
  className="
  h-10
  rounded-lg
  bg-[#E6EEFF]
  text-[#091B3D]
  text-[12px]
  font-semibold
  transition
  hover:bg-[#D5E2FF]
  "
>
  Daily
</button>
<button
  className="
  h-10
  rounded-lg
  bg-[#E6EEFF]
  text-[#091B3D]
  text-[12px]
  font-semibold
  transition
  hover:bg-[#D5E2FF]
  "
>
      Weekly
    </button>

    <button
  className="
  h-10
  rounded-lg
  bg-[#E6EEFF]
  text-[#091B3D]
  text-[12px]
  font-semibold
  transition
  hover:bg-[#D5E2FF]
  "
>
      Monthly
    </button>

  </div>

  {/* Rent Button */}
  import Link from "next/link";

<Link href="/payments">
  <button
    className="
    mt-6
    w-full
    h-14
    rounded-2xl
    bg-gradient-to-r
    from-black
    to-[#001F6E]
    text-white
    font-semibold
    tracking-wide
    transition-all
    duration-300
    hover:scale-[1.02]
    "
  >
    
    RENT NOW
    </button>
</Link>

</div>

      </div>

    ))}

  </div>

</section>
<section className="px-12 pb-24 transition hover:scale-105">

  <div className="bg-[#EEF2FF] rounded-[30px] p-16">

    <div className="grid lg:grid-cols-2 gap-12">

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl p-8 transition hover:scale-105">
          <h4 className="font-bold text-xl">
            Full Coverage
          </h4>

          <p className="mt-3 text-gray-500">
            Comprehensive premium insurance included.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 transition hover:scale-105">
          <h4 className="font-bold text-xl">
            Concierge Delivery
          </h4>

          <p className="mt-3 text-gray-500">
            Vehicle delivered directly to your location.
          </p>
        </div>

      </div>

      <div>

        <h2 className="text-6xl font-black text-[#091B3D]">
          WHY RENT FROM THE GALLERY?
        </h2>

        <p className="mt-6 text-gray-500 leading-8">
          Our vehicles are more than machines—
          they are curated experiences designed
          for absolute luxury and precision.
        </p>

        <button className="mt-8 font-semibold tracking-[3px]">
          LEARN ABOUT OUR STANDARDS
        </button>

      </div>

    </div>

  </div>

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