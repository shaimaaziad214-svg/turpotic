"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

function MotorcycleContent() {
    const searchParams = useSearchParams();

const name = searchParams.get("name");
const price = searchParams.get("price");
const image = searchParams.get("image");
  return (
    <main className="min-h-screen bg-[#F5F7FD] p-10">

      <Link
        href="/motorcycles"
        className="text-blue-[#02112C]font-semibold"
      >
        ← Back to Motorcycles
      </Link>

      <div className="mt-8 bg-[#EAF0FF] rounded-3xl shadow-xl p-10">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="flex justify-center">
            <Image
src={image || "/images/motorcycle.png"}
             alt={name || "Motorcycle"}
              width={500}
              height={350}
              className="object-contain"
            />
          </div>

          <div>

<h1 className="text-6xl font-extrabold text-black">              {name}
            </h1>
                <p className="mt-4 text-xl font-medium text-[#02112C]">
                Premium performance motorcycle built for speed,
                comfort and racing experience.
                </p>
            <div className="mt-8 space-y-4 text-[#02112C] text-xl font-semibold">

            <p>
                <strong>Engine:</strong> 1103cc
            </p>

            <p>
                <strong>Power:</strong> 214 HP
            </p>

            <p>
                <strong>Top Speed:</strong> 299 km/h
            </p>

            <p>
                <strong>Year:</strong> 2024
            </p>

            </div>

            <h2 className="mt-8 text-4xl font-black text-[#03173B]">
{price}
            </h2>

<Link
  href={`/payments?name=${encodeURIComponent(name || "")}&price=${encodeURIComponent(price || "")}&image=${encodeURIComponent(image || "")}`}
>
  <button
    className="
    mt-8
    rounded-2xl
    bg-[#03173B]
    px-10
    py-4
    text-white
    font-semibold
    hover:scale-105
    transition
    "
  >
    Buy Now
  </button>
</Link>

          </div>

        </div>

      </div>

    </main>
  );
}
export default function MotorcycleDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MotorcycleContent />
    </Suspense>
  );
}