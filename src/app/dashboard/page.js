"use client";

import { useEffect, useState } from "react";
import CementForm from "@/components/cement/CementForm";
import { getCementEntries } from "@/lib/storage/cementStorage";
import { createCementEntry } from "@/lib/services/cementService";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);

  // LOAD DATA
  useEffect(() => {
    const data = getCementEntries();
    setEntries(data);
  }, []);

  // RELOAD AFTER ADD
  const refreshEntries = () => {
    setEntries(getCementEntries());
  };

  // KPI CALCULATIONS
  const totalCement = entries.reduce(
    (sum, item) => sum + Number(item.cementAmount || 0),
    0
  );

  const totalAmount = entries.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const todayEntries = entries.filter((item) => {
    const today = new Date().toDateString();
    return item.date
      ? new Date(item.date).toDateString() === today
      : false;
  }).length;

  const uniqueDealers = new Set(entries.map((e) => e.dealerName)).size;

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Operations Dashboard
        </h1>
        <p className="text-gray-500">
          Manager bookkeeping system — cement, dealers, trucks, payments
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-600">
          <p className="text-gray-500 text-sm">Today Entries</p>
          <h2 className="text-2xl font-bold">{todayEntries}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-green-600">
          <p className="text-gray-500 text-sm">Total Cement (Tons)</p>
          <h2 className="text-2xl font-bold">{totalCement}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-purple-600">
          <p className="text-gray-500 text-sm">Total Sales (Rs)</p>
          <h2 className="text-2xl font-bold">{totalAmount}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border-l-4 border-orange-500">
          <p className="text-gray-500 text-sm">Active Dealers</p>
          <h2 className="text-2xl font-bold">{uniqueDealers}</h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            New Cement Entry
          </h2>

          <CementForm
            onSubmit={(form) => {
              createCementEntry(form);
              refreshEntries();
            }}
          />
        </div>

      </div>
    </div>
  );
}