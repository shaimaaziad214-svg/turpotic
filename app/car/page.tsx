"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cars = [
 {
  name: "911 CARRERAS",
  image: "/turpotic/images/audi.png",
  price: "$148,500",
  category: "GRAND TOURING",
},
  {
    name: "F8 TRIBUTO",
    image: "/turpotic/images/ferrari.png",
    price: "$276,000",
    category: "SUPER SPORT"
  },
  {
    name: "R8 E-TRONGT",
    image: "/turpotic/images/porsche.png",
    price: "$139,900",
    category: "ELECTRIC"
  },
  {
    name: "VANTAGE V8",
    image: "/turpotic/images/bmw.png",
    price: "$165,500",
    category: "LUXURY SUV"
  },
  {
    name: "CAYMAN GT4",
    image: "/turpotic/images/yellow-car.png",
    price: "$102,500",
    category: "LUXURY SUV"

  },
  {
    name: "HURACÁN ST",
    image: "/turpotic/images/white-sedan.png",
    price: "$104,500",
    category: "ELECTRIC"
  },
];

export default function CarPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL MODELS");
  const [sortOrder, setSortOrder] = useState("HIGH");
  const [cartCount, setCartCount] = useState(0);
  return (
    <main className="min-h-screen bg-[#F5F7FD]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white">

        <h1 className="text-3xl font-extrabold">
          <span className="text-black">TURPO</span>
          <span className="text-blue-500">TIC</span>
        </h1>

        <ul className="flex gap-8 text-gray-600">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li className="text-blue-500 font-semibold">
            <Link href="/car">Car</Link>
          </li>

          <li>
            <Link href="/rent">Rent</Link>
          </li>

          <li>
            <Link href="/motorcycles">Motorcycles</Link>
          </li>
        </ul>
<div className="flex gap-5 text-xl items-center">

  <button
    onClick={() => {
      document
        .getElementById("search-box")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    🔍
  </button>
<Link href="/cart">
  <div className="relative">
    🛒
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full cursor-pointer">
        {cartCount}
      </span>

    )}
  </div>
  </Link>
<Link href="/profile">
  <button className="text-2xl hover:scale-110 transition">
    👤
  </button>
</Link>

</div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="grid lg:grid-cols-2">

          <div className="bg-[#041533] min-h-[700px] flex items-center">

            <div className="px-16">

              <h2 className="text-7xl font-bold text-white leading-tight">
                Find your
                <br />
                Dream Car
              </h2>

              <p className="mt-10 text-gray-300 text-lg max-w-md">
                Discover premium vehicles tailored to your lifestyle.
                Performance, luxury and reliability all in one place.
              </p>

             <a
  href="#cars"
  className="mt-12 inline-block rounded-2xl bg-[#DCE7FF] px-12 py-4 font-semibold text-[#041533] transition hover:scale-105 "
>
  Get Started
</a>
            </div>
          </div>

          <div className="bg-white min-h-[700px] flex items-center justify-center">

            <h2 className="text-7xl font-bold text-[#091B3D]">
              Sell your
              <br />
              <span className="text-[#647BFF]">Car</span>
            </h2>

          </div>
        </div>

        {/* Floating Car */}
        <div className="absolute left-1/2 top-[110px] -translate-x-1/2 z-20 transition hover:scale-105">
          <Image
            src="/turpotic/images/top-car.png"
            alt="Top Car"
            width={420}
            height={420}
            className="drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="px-10 pt-10">

  <input
  id="search-box"
    type="text"
    placeholder="Search cars..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
    w-full
    rounded-2xl
    border
    border-gray-300
    bg-white
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
      <section className="px-10 py-12">

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
  onClick={() => setFilter(item)}
  className={`
    rounded-full px-6 py-3 font-semibold shadow transition
    ${
      filter === item
        ? "bg-[#03173B] text-white"
        : "bg-[#DCE7FF] text-[#03173B]"
    }
  `}
>
  {item}
</button>
          ))}
        </div>

        <div className="mt-6 flex gap-4">

         <button
  onClick={() =>
    setSortOrder(sortOrder === "HIGH" ? "LOW" : "HIGH")
  }
  className="rounded-full bg-[#DCE7FF] px-6 py-3 text-[#03173B] shadow transition hover:scale-105"
>
  PRICE: {sortOrder === "HIGH" ? "HIGH TO LOW" : "LOW TO HIGH"}
</button>

          <button className="rounded-full bg-[#DCE7FF] px-6 py-3 text-[#03173B] shadow transition hover:scale-105">
            PRICE: HIGH TO LOW
          </button>
        </div>
      </section>

      {/* Cards */}
    <section
  id="cars"
  className="px-10 pb-20"
>

        <div className="grid lg:grid-cols-3 gap-10">

{cars
  .filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter(
    (car) =>
      filter === "ALL MODELS" ||
      car.category === filter
  )
  .sort((a, b) => {
    const priceA = Number(a.price.replace(/[$,]/g, ""));
    const priceB = Number(b.price.replace(/[$,]/g, ""));

    return sortOrder === "HIGH"
      ? priceB - priceA
      : priceA - priceB;
  })
  
  .map((car) => (           <div
  key={car.name}
  className="
    group
    overflow-hidden
    rounded-[30px]
    border
    border-white/30
    bg-white/70
    backdrop-blur-xl
    shadow-2xl
    transition-all
    duration-500
    hover:-translate-y-4
    hover:scale-[1.03]
    hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
  "
>

              <div className="relative bg-gradient-to-b from-black via-[#071428] to-[#13213C] p-8">

                <Image
                  src={car.image}
                  alt={car.name}
                  width={350}
                  height={220}
                  className="
                            mx-auto
                            h-[220px]
                            object-contain
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:-translate-y-2
                            "
                />

                        <div
                            className="
                            absolute
                            bottom-6
                            right-6
                            rounded-full
                            bg-white
                            px-8
                            py-3
                            shadow-2xl
                            border
                            border-gray-100
                            z-20
                            "
                            >
                            <p className="text-[#091B3D] text-xl font-extrabold">
                                {car.price}
                            </p>
                            </div>

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-bold text-[#091B3D]">
                  {car.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  HERITAGE SILVER | 2024
                </p>

                <div className="mt-5 flex gap-2">

                  <span className="rounded-full bg-[#DCE7FF] px-3 py-1 text-[#03173B]">
                    4.5s
                  </span>

                  <span className="rounded-full bg-[#DCE7FF] px-3 py-1 text-[#03173B]">
                    503 HP
                  </span>

                </div>
<button
  onClick={() => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart") || "[]");

    existingCart.push(car);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    alert(`${car.name} added to cart`);
  }}
  className="mt-8 w-full rounded-2xl bg-[#03173B] py-4 font-semibold text-white transition hover:scale-105"
>
  ADD TO CART
</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore */}
      <section className="pb-24 text-center">
<Link href="/motorcycles">
        <button className="rounded-full bg-[#DCE7FF] px-14 py-4 font-semibold text-[#03173B] hover:scale-105 transition">
          EXPLORE MORE INVENTORY →
        </button>
        </Link>

        <p className="mt-5 text-sm text-gray-500">
          PAGE 1 OF 4
        </p>

      </section>


<footer className="mt-0 px-12 py-16 bg-white">
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