"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FD]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">

        <h1 className="text-3xl font-extrabold">
          <span className="text-black">TURPO</span>
          <span className="text-[#6483FF]">TIC</span>
        </h1>

        <Link
          href="/"
          className="
          rounded-xl
          bg-[#03173B]
          px-5
          py-3
          text-white
          transition
          hover:scale-105
          "
        >
          Back Home
        </Link>

      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">

        {/* Profile Card */}
        <div className="bg-white rounded-[35px] p-10 shadow-xl">

          <div className="flex flex-col items-center">

            <div
              className="
              w-32
              h-32
              rounded-full
              bg-gradient-to-r
              from-[#03173B]
              to-[#6483FF]
              flex
              items-center
              justify-center
              text-6xl
              text-white
              "
            >
              👤
            </div>

            <h1 className="mt-6 text-5xl font-black text-[#03173B]">
              Alex Driver
            </h1>

            <p className="mt-3 text-gray-500 text-lg">
              alex@turpotic.com
            </p>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-[#EEF2FF] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-[#6483FF]">
                12
              </h3>

              <p className="mt-2 text-[#03173B] font-semibold">
                Saved Vehicles
              </p>
            </div>

            <div className="bg-[#EEF2FF] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-[#6483FF]">
                4
              </h3>

              <p className="mt-2 text-[#03173B] font-semibold">
                Orders
              </p>
            </div>

            <div className="bg-[#EEF2FF] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-[#6483FF]">
                VIP
              </h3>

              <p className="mt-2 text-[#03173B] font-semibold">
                Membership
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <button
              onClick={() =>
                alert("Profile editing coming soon")
              }
              className="
              rounded-2xl
              bg-gradient-to-r
              from-[#03173B]
              to-[#0A2A6A]
              py-4
              text-white
              font-bold
              transition
              hover:scale-105
              "
            >
              Edit Profile
            </button>

            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
              className="
              rounded-2xl
              bg-red-600
              py-4
              text-white
              font-bold
              transition
              hover:bg-red-700
              "
            >
              Logout
            </button>

          </div>

        </div>

        {/* Activity */}
        <div className="bg-white rounded-[35px] p-10 shadow-xl mt-10">

          <h2 className="text-3xl font-bold text-[#03173B] mb-8">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div className="bg-[#F5F7FD] rounded-2xl p-5">
              <p className="font-semibold text-[#03173B]">
                Purchased Audi R8 E-Tron GT
              </p>

              <span className="text-gray-500">
                2 days ago
              </span>
            </div>

            <div className="bg-[#F5F7FD] rounded-2xl p-5">
              <p className="font-semibold text-[#03173B]">
                Added Ferrari F8 Tributo to cart
              </p>

              <span className="text-gray-500">
                5 days ago
              </span>
            </div>

            <div className="bg-[#F5F7FD] rounded-2xl p-5">
              <p className="font-semibold text-[#03173B]">
                Saved BMW Vantage V8
              </p>

              <span className="text-gray-500">
                1 week ago
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}