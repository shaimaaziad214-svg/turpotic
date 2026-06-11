"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SuccessPage() {
  const [vehicle, setVehicle] = useState<any>(null);

  useEffect(() => {
    const item = JSON.parse(
      localStorage.getItem("lastPurchase") || "null"
    );

    setVehicle(item);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F8FC] px-6">

      <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-3xl w-full">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-black text-[#02112C]">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for your purchase.
        </p>

        <div className="mt-8 bg-[#F7F8FC] rounded-3xl p-6">

          <h2 className="text-2xl font-bold text-[#02112C] mb-6">
            Booking Details
          </h2>

          <p className="text-gray-600 mb-6">
            Booking ID:
            <span className="font-bold text-black ml-2">
              TP-2026-001
            </span>
          </p>

          {vehicle && (
            <div className="flex flex-col items-center">

              <Image
                src={vehicle.image}
                alt={vehicle.name}
                width={300}
                height={180}
                className="object-contain"
              />

              <h3 className="mt-4 text-3xl font-black text-[#02112C]">
                {vehicle.name}
              </h3>

              <p className="mt-2 text-2xl font-bold text-[#6483FF]">
                {vehicle.price}
              </p>

            </div>
          )}

        </div>

        <div className="mt-10 flex justify-center gap-4">

          <Link href="/">
            <button className="px-10 py-4 rounded-2xl bg-[#02112C] text-white font-bold hover:scale-105 transition">
              Back Home
            </button>
          </Link>

          <Link href="/profile">
            <button className="px-10 py-4 rounded-2xl border-2 border-[#02112C] text-[#02112C] font-bold hover:bg-[#02112C] hover:text-white transition">
              My Profile
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}