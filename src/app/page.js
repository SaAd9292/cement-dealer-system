"use client";

import Link from "next/link";

export default function Home() {
  const stats = [
    { title: "Total Dealers", value: 12, color: "border-blue-600" },
    { title: "Cement Sold", value: "540 Tons", color: "border-green-600" },
    { title: "Revenue", value: "Rs 1.2M", color: "border-purple-600" },
    { title: "Trucks Today", value: 18, color: "border-orange-500" },
  ];

  const recent = [
    { truck: "ABC-123", dealer: "Ali Traders", cement: 20, invoice: "INV-001" },
    { truck: "XYZ-456", dealer: "Khan Cement", cement: 25, invoice: "INV-002" },
    { truck: "DEF-789", dealer: "Afridi Supplies", cement: 30, invoice: "INV-003" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Azad Afridi Cement Dealer System
        </h1>
        <p className="text-gray-500 mt-1">
          Enterprise Resource Management Dashboard
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${item.color}`}
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2 text-[#0F172A]">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* ACTION BAR */}
      <div className="bg-white p-5 rounded-xl shadow-sm mb-8 flex flex-wrap gap-3">
        <Link
          href="/dealers"
          className="bg-[#1E3A8A] text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition"
        >
          + Manage Dealers
        </Link>

        <Link
          href="/dashboard"
          className="bg-[#0EA5E9] text-white px-5 py-2 rounded-lg hover:bg-sky-600 transition"
        >
          Open Dashboard
        </Link>

        <Link
          href="/dashboard"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-black transition"
        >
          New Cement Entry
        </Link>
      </div>

      {/* RECENT RECORDS */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-[#0F172A] mb-4">
          Recent Transactions
        </h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">Truck No</th>
              <th>Dealer</th>
              <th>Cement (Tons)</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>
            {recent.map((r, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="py-3 text-[#0F172A] font-medium">{r.truck}</td>
                <td className="text-gray-700">{r.dealer}</td>
                <td className="text-gray-700">{r.cement}</td>
                <td className="text-gray-700">{r.invoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}