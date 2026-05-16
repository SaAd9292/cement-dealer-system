"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [openBookings, setOpenBookings] = useState(false);

  return (
    <div className="h-screen w-64 bg-[#0F172A] text-white p-5 flex flex-col">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-bold">
          Azad Afridi Cement
        </h1>
        <p className="text-gray-400 text-xs mt-1">
          Dealer Management System
        </p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col space-y-2 text-sm">

        {/* HOME */}
        <Link
          href="/"
          className="p-2 rounded hover:bg-gray-800 transition"
        >
          🏠 Home
        </Link>

        {/* BOOKINGS DROPDOWN */}
        <div>

          <button
            onClick={() => setOpenBookings(!openBookings)}
            className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-800 transition"
          >
            <span>📦 Bookings</span>
            <span className="text-xs">
              {openBookings ? "▲" : "▼"}
            </span>
          </button>

          {/* SUBMENU */}
          {openBookings && (
            <div className="ml-4 mt-2 flex flex-col space-y-1 border-l border-gray-700 pl-3">

              {/* BOOKING FORM */}
              <Link
                href="/bookings"
                className="p-2 rounded hover:bg-gray-800 transition"
              >
                ➕ Booking Form
              </Link>

              {/* BOOKING TABLE */}
              <Link
                href="/bookings/table"
                className="p-2 rounded hover:bg-gray-800 transition"
              >
                📊 Booking Table
              </Link>

            </div>
          )}

        </div>

        {/* DEALERS */}
        <Link
          href="/dealers"
          className="p-2 rounded hover:bg-gray-800 transition"
        >
          👷 Dealers
        </Link>

        {/* TRUCKS */}
        <Link
          href="/trucks"
          className="p-2 rounded hover:bg-gray-800 transition"
        >
          🚛 Trucks
        </Link>

        {/* EXPENSES */}
        <Link
          href="/expenses"
          className="p-2 rounded hover:bg-gray-800 transition"
        >
          💸 Expenses
        </Link>

      </nav>

      {/* FOOTER */}
      <div className="mt-auto text-xs text-gray-500 pt-4 border-t border-gray-700">
        v1.0 system
      </div>

    </div>
  );
}