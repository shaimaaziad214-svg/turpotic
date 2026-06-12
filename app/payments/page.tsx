
"use client";

import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";



export default function PaymentPage() {
const router = useRouter();
const vehicleName = "RSE-TRON GT";

const vehiclePrice = "$147,420";

const vehicleImage = "/turpotic/images/porsche.png";

const [name, setName] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [expiry, setExpiry] = useState("");
const [cvv, setCvv] = useState("");


const handlePayment = () => {
  router.push("/success");
};
  return (
    <main className="min-h-screen bg-[#F7F8FC]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-8 bg-white">
        <h1 className="text-4xl font-black italic">
          <span className="text-black">TURPO</span>
          <span className="text-[#6483FF]">TIC</span>
        </h1>

        <ul className="flex gap-10 text-gray-500 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/car">Car</Link></li>
          <li><Link href="/rent">Rent</Link></li>
          <li><Link href="/motorcycles">Motorcycles</Link></li>
        </ul>

       <div className="flex gap-6 text-xl items-center">

  <button
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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

      {/* Main Section */}
      <section className="px-12 py-16">

        <p className="text-sm tracking-[3px] font-semibold text-gray-500 uppercase">
          Secure Checkout
        </p>

        <h1 className="mt-4 text-6xl font-black text-[#02112C]">
          Confirm Your Order
        </h1>

        <div className="mt-16 grid lg:grid-cols-[58%_42%] gap-12">

          {/* Payment Form */}
          <div className="rounded-[35px] bg-[#EEF2FF] p-10">

            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDE6FF] text-2xl">
                🔒
              </div>

              <div>
                <h3 className="text-2xl font-bold public/images/porsche.png">
                  Secure Encryption
                </h3>

                <p className="text-gray-500">
                  Your payment data is protected by bank-level SSL encryption.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-8">

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-gray-600">
                  Cardholder Name
                </label>

                <input
                  type="text"
                  placeholder="ALEXANDER KINETIC"
                                    value={name}
onChange={(e) => setName(e.target.value)}
           
                  className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-5 outline-none transition-all focus:border-[#6483FF] focus:ring-4 focus:ring-blue-100 text-[#02112C]  placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-gray-600">
                  Card Number
                </label>

                <input
                  type="text"
                  placeholder="0000 0000 0000 2531"
                                value={cardNumber}
onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-5 outline-none transition-all focus:border-[#6483FF] focus:ring-4 focus:ring-blue-100 text-[#02112C] placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-gray-600">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    placeholder="MM / YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-5 outline-none transition-all focus:border-[#6483FF] focus:ring-4 focus:ring-blue-100 text-[#02112C] placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-gray-600">
                    CVV / CVC
                  </label>

                  <input
                    type="password"
                    placeholder="***"
                  value={cvv}
onChange={(e) => setCvv(e.target.value)}
                    className="w-full rounded-2xl border border-gray-00 bg-white px-6 py-5 outline-none transition-all focus:border-[#6483FF] focus:ring-4 focus:ring-blue-100 text-[#02112C] placeholder:text-gray-400 "
                  />
                </div>

              </div>
<button
  onClick={() => {
    if (!name) {
      alert("Please enter cardholder name");
      return;
    }

    if (cardNumber.length < 16) {
      alert("Card number must be 16 digits");
      return;
    }

    if (!expiry) {
      alert("Please enter expiry date");
      return;
    }

    if (cvv.length < 3) {
      alert("CVV must be 3 digits");
      return;
    }

    const cart = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

if (cart.length > 0) {
  localStorage.setItem(
    "lastPurchase",
    JSON.stringify(cart[0])
  );
}

    router.push("/success");
  }}
  className="
  mt-6
  w-full
  rounded-2xl
  bg-gradient-to-r
  from-[#02112C]
  to-[#0A2A6A]
  py-5
  text-lg
  font-bold
  text-white
  transition-all
  duration-500
  hover:scale-[1.02]
  hover:shadow-2xl
  "
>
  PAY NOW
</button>

            </div>

            <p className="mt-12 text-center text-sm text-gray-500">
              TRANSACTION PROCESSED BY TURPOTIC SECURE SYSTEMS INC.
            </p>

          </div>

          {/* Order Summary */}
          <div className="rounded-[35px] bg-[#EEF2FF] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transition hover:scale-105">

            <div className="relative h-[320px] bg-black">

              <Image
                src={vehicleImage}
                alt={vehicleName}
                fill
                className="object-contain p-8"
              />

              <div className="absolute left-6 bottom-6 rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[2px] text-[#02112C]">
                PREMIUM FLEET
              </div>
            </div>

            <div className="p-8">

              <h2 className="text-5xl font-black text-[#02112C]">
                {vehiclePrice}

              </h2>

              <p className="mt-2 text-gray-500 tracking-wider">
                HERITAGE SILVER | 2024
              </p>

              <div className="mt-10 space-y-6 text-gray-600">

                <div className="flex justify-between">
                  <span>VEHICLE BASE PRICE</span>
                  <span className="font-bold">$124,500.00</span>
                </div>

                <div className="flex justify-between">
                  <span>CARBON PACKAGE UPGRADE</span>
                  <span className="font-bold">$12,000.00</span>
                </div>

                <div className="flex justify-between">
                  <span>ESTIMATED TAX (8%)</span>
                  <span className="font-bold">$10,920.00</span>
                </div>

                <div className="flex justify-between">
                  <span>SHIPPING & HANDLING</span>
                  <span className="font-bold text-[#6483FF]">FREE</span>
                </div>

              </div>

              <hr className="my-8" />

              <p className="text-xs tracking-[3px] text-gray-500 uppercase">
                Total Investment
              </p>

              <div className="mt-4 flex items-center justify-between">

                <h3 className="text-6xl font-black text-[#02112C]">
                  {vehiclePrice}
                </h3>

                <div className="rounded-full bg-[#02112C] px-4 py-2 text-white text-sm font-semibold">
                  USD
                </div>

              </div>

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