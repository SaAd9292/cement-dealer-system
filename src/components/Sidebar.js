"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-[#0F172A] text-white p-6 space-y-6">

      <div>
        <h1 className="text-xl font-bold">Azad Afridi Cement </h1>
        <p className="text-gray-400 text-sm mt-1">
          Dealer Management System
        </p>
      </div>

      <nav className="flex flex-col space-y-2">

        <Link className="p-2 rounded hover:bg-gray-800" href="/">
          🏠 Home
        </Link>

        <Link className="p-2 rounded hover:bg-gray-800" href="/dashboard">
          📊 Dashboard
        </Link>

        <Link className="p-2 rounded hover:bg-gray-800" href="/dealers">
          👷 Dealers
        </Link>

      </nav>
    </div>
  );
}