"use client";

import CementForm from "@/components/CementForm";
import RecordsTable from "@/components/RecordsTable";
import { useEffect, useState } from "react";
import { getCementEntries } from "@/lib/cementStorage";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalEntries: 0,
    totalCement: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    const data = getCementEntries();

    const totalEntries = data.length;

    const totalCement = data.reduce(
      (sum, item) => sum + Number(item.cementAmount || 0),
      0
    );

    const totalAmount = data.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

    setStats({ totalEntries, totalCement, totalAmount });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-8 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Operations Dashboard</h1>
        <p className="text-gray-500">
          Manage cement entries and dealer operations
        </p>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Entries</p>
          <h2 className="text-2xl font-bold">{stats.totalEntries}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Cement (Tons)</p>
          <h2 className="text-2xl font-bold">{stats.totalCement}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-bold">Rs {stats.totalAmount}</h2>
        </div>

      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">New Entry</h2>
          <CementForm />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Records</h2>
          <RecordsTable />
        </div>

      </div>

    </div>
  );
}