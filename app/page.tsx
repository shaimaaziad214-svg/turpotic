"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [recommendation, setRecommendation] = useState(
  "Choose a category to get a recommendation"
);

  return (
    <main>
      <section className="relative h-screen overflow-hidden pt-24">

        {/* صورة السيارة */}
        <Image
          src="/images/alex_rainer-1_lxISUE3F4-unsplash 1.png"
          alt="Car"
          fill
          priority
          className="object-cover scale-99 object-right translate-y-15"
        />

        {/* طبقة شفافة فوق الصورة */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/15 to-transparent z-10"></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 py-6 bg-white">
        
          <h1 className="text-4xl font-bold">
          <span className="text-black">TURPO</span>
           <span className="text-blue-500">TIC</span>
            </h1>
           <ul className="flex gap-8 text-gray-700">
  <li className="text-blue-500 font-semibold">
    <Link href="/">Home</Link></li>
  <li><Link href="/car">Car</Link></li>
  <li><Link href="/rent">Rent</Link></li>
  <li><Link href="/motorcycles">Motorcycles</Link></li>
</ul>

<div className="flex gap-4 text-xl items-center">

  <button
    onClick={() => {
      document
        .getElementById("featured-cars")
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
        
        {/* النص فوق السيارة */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 max-w-xl">

          <div className="mb-6 inline-block rounded-full bg-blue-100 px-8 py-2 text-sm font-semibold tracking-wider text-gray-700">
            EVOLUTION OF SPEED
          </div>

          <h2 className="text-[96px] font-semibold text-black drop-shadow-sm">
            PRECISON
          </h2>

          <h2 className="text-[96px] font-semibold text-blue-500 drop-shadow-sm">
            MOTION
          </h2>

          <p className="mt-8 text-lg text-gray-700">
            A curated gallery of automotive masterpieces.
            Where engineering excellence meets unparalleled
            aesthetic design.
          </p>

          <div className="mt-10 flex gap-4">
                  <Link href="/car">
            <button className="rounded-2xl bg-gradient-to-l from-[#0B1F3A] via-[#081527] to-black px-8 py-3 text-white shadow-lg transition hover:scale-105">
              Explore Collection
            </button>
          </Link>
            <Link href="/payments">
              <button className="rounded-2xl bg-white px-8 py-3 text-gray-800 shadow transition hover:scale-105">
                Book Appraisal
              </button>
            </Link>

          </div>
        </div>

      </section>
      <section id="featured-cars" className="bg-[#f5f5f7] px-10 py-15 ">
  <h2 className="text-5xl font-bold text-[#0B1F3A]">
    SELECT YOUR PATH
  </h2>

  <p className="mt-2 text-gray-600">
    Tailored experiences for every enthusiast
  </p>

  <div className="mt-12 grid grid-cols-3 gap-8">
 
    {/* Buy */}
    <Link href="/car">
  <div className="relative overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition">
      <Image
        src="/images/vecteezy_car-on-white-background_55672594 1.png"
        alt="Buy"
        width={400}
        height={500}
        className="h-[420px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-6 left-6 text-white"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-4xl font-bold">Buy</h3>
        <p>Invest in timeless engineering</p>
         <span className="block mt-0 text-3xl">→</span>
      </div>
     </div>
</Link>

    {/* Rent */}
    <Link href="/rent">
      <div className="relative overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition">
      <Image
        src="/images/263390 1.png"
        alt="Rent"
        width={400}
        height={500}
        className="h-[420px] w-full object-cover"
      />
   <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-4xl font-bold">Rent</h3>
        <p>The thrill, on your terms</p>
         <span className="block mt-0 text-3xl">→</span>
      </div>
    </div>
    </Link>

    {/* Motorcycles */}
    <Link href="/motorcycles">
      <div className="relative overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition">
      <Image
        src="/images/honda-cbr600rr-white 1.png"
        alt="Motorcycles"
        width={400}
        height={500}
        className="h-[420px] w-full object-cover"
      />
     <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-4xl font-bold">Motorcycles</h3>
        <p>Two wheels, pure adrenaline</p>
         <span className="block mt-0 text-3xl">→</span>
      </div>
    </div>
</Link>
  </div>
  

   </section>
   <section className="bg-white px-12 py-24">
  <h2 className="mb-12 text-6xl font-bold text-[#0B1F3A]">
    Featured Gallery.
  </h2>

  <div className="grid grid-cols-3 gap-8">

    {/* البطاقة الكبيرة */}
<div className="group relative col-span-2 overflow-hidden rounded-[32px] cursor-pointer">

  <Image
    src="/images/alex_rainer-1_lxISUE3F4-unsplash 1.png"
    alt="Lamborghini"
    width={800}
    height={500}
    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* View Details */}
  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
    
    <button className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg">
      View Details
    </button>
  </div>

  {/* Text */}
  <div className="absolute bottom-8 left-8 z-10 text-white">
    <h3 className="text-3xl font-bold">
      Lamborghini Aventador
    </h3>

    <div className="mt-4 flex gap-8 text-lg">
      <span>330 KM/H</span>
      <span>Electric</span>
      <span>$249,000</span>
    </div>
  </div>

</div>

    {/* العمود الجانبي */}
    <div className="flex flex-col gap-6 transition hover:scale-105">

      <div className="group cursor-pointer rounded-[32px] bg-[#E8ECF5] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <Image
        
         src="/images/motorcycle_listing_new 1.png"
          alt="Motorcycle"
            width={530}
            height={313}
        className="w-full object-contain transition duration-500 group-hover:scale-105"
         

        />

        <h3 className="mt-4 text-2xl font-bold text-[#0B1F3A]">
          PHANTOM X-Rider
        </h3>

        <p className="mt-2 text-gray-500">
          Custom built urban performance.
        </p>

        <p className="mt-4 text-3xl font-bold text-blue-500 transition duration-300 group-hover:text-blue-700">
          $32,500
        </p>
      </div>

      <div className="cursor-pointer rounded-[32px] bg-[#DDEEFF] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-[#0B1F3A]">
          VINTAGE PRESTIGE
        </h3>

        <p className="mt-3 text-gray-500">
          Certified 1968 restorations.
        </p>

        <button className="mt-6 font-semibold text-[#D7E3FA] transition-all duration-300 hover:translate-x-2 hover:text-blue-500">
          VIEW COLLECTION →
        </button>
      </div>

    </div>

  </div>
</section>

<section className="px-10 py-12 bg-[#DDEEFF] ">

  <h2 className="text-4xl font-bold text-[#03173B] mb-4">
    AI Vehicle Advisor
  </h2>

  <p className="text-gray-500 mb-8">
    Select your preference and get an AI recommendation.
  </p>

  <div className="flex flex-wrap gap-4">

    <button
      onClick={() =>
        setRecommendation(
          "Lamborghini Aventador — Best match for luxury and performance enthusiasts."
        )
      }
      className="rounded-xl bg-blue-500 px-8 py-4 text-white font-semibold"
    >
      Luxury
    </button>

    <button
      onClick={() =>
        setRecommendation(
          "Ferrari F8 Tributo — Perfect for speed and sport driving."
        )
      }
      className="rounded-xl bg-blue-500 px-8 py-4 text-white font-semibold"
    >
      Sport
    </button>

    <button
      onClick={() =>
        setRecommendation(
          "BMW X5 — Ideal for family comfort and safety."
        )
      }
      className="rounded-xl bg-blue-500 px-8 py-4 text-white font-semibold"
    >
      Family
    </button>

    <button
      onClick={() =>
        setRecommendation(
          "Cayman GT4 — Great value and budget-friendly option."
        )
      }
      className="rounded-xl bg-blue-500 px-8 py-4 text-white font-semibold"
    >
      Budget
    </button>

  </div>

  <div className="mt-8 rounded-3xl bg-white p-8 shadow">
    <h3 className="text-2xl font-bold text-[#03173B] mb-3">
      AI Recommendation
    </h3>

    <p className="text-gray-600">
      {recommendation}
    </p>
  </div>

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