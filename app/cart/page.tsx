"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace(/[$,]/g, ""))
    );
  }, 0);

  return (
    <main className="min-h-screen bg-[#0A1228] p-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-black text-white">
          Shopping Cart
        </h1>

        <p className="mt-3 text-gray-400">
          Review your selected vehicles before payment.
        </p>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <div
          className="
          rounded-3xl
          bg-[#121D3A]
          border
          border-[#24365F]
          p-12
          text-center
          "
        >
          <h2 className="text-3xl font-bold text-white">
            Your cart is empty
          </h2>

          <p className="mt-3 text-gray-400">
            Add some vehicles from the Cars page.
          </p>

          <Link href="/car">
            <button
              className="
              mt-8
              rounded-2xl
              bg-gradient-to-r
              from-[#02112C]
              to-[#0B2C73]
              px-10
              py-4
              text-white
              font-semibold
              transition
              hover:scale-105
              "
            >
              Browse Cars
            </button>
          </Link>
        </div>
      )}

      {/* Cart Items */}
      <div className="space-y-6">

        {cart.map((car, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            justify-between
            bg-[#121D3A]
            rounded-3xl
            p-6
            border
            border-[#24365F]
            shadow-xl
            "
          >
            <div className="flex items-center gap-6">

              <Image
                src={car.image}
                alt={car.name}
                width={180}
                height={120}
                className="object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {car.name}
                </h3>

                <p className="mt-2 text-[#8FA8FF] font-semibold text-lg">
                  {car.price}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Total Section */}
      {cart.length > 0 && (
        <div
          className="
          mt-10
          bg-[#121D3A]
          rounded-3xl
          p-8
          border
          border-[#24365F]
          shadow-xl
          "
        >
          <h2 className="text-3xl font-bold text-white">
            Total:
          </h2>

          <p className="text-5xl font-black mt-4 text-[#6483FF]">
            ${total.toLocaleString()}
          </p>

          <div className="flex gap-4 mt-8">

            <Link href="/payments">
              <button
                className="
                rounded-2xl
                bg-gradient-to-r
                from-[#02112C]
                to-[#0B2C73]
                px-10
                py-4
                text-white
                font-semibold
                transition
                hover:scale-105
                hover:shadow-xl
                "
              >
                Proceed to Payment
              </button>
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("cart");
                setCart([]);
              }}
              className="
              rounded-2xl
              bg-red-600
              px-10
              py-4
              text-white
              font-semibold
              transition
              hover:bg-red-700
              "
            >
              Clear Cart
            </button>

          </div>
        </div>
      )}

    </main>
  );
}