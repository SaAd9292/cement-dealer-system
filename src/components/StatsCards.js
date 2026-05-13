"use client";

export default function StatsCards({ records = [], dealers = [] }) {
  const totalRecords = records.length;
  const totalDealers = dealers.length;

  const totalWeight = records.reduce(
    (sum, r) => sum + Number(r.cementAmount || 0),
    0
  );

  const totalRevenue = records.reduce(
    (sum, r) => sum + Number(r.amount || 0),
    0
  );

  const stats = [
    { label: "Total Dealers", value: totalDealers, color: "bg-blue-500" },
    { label: "Total Entries", value: totalRecords, color: "bg-green-500" },
    { label: "Cement (Tons)", value: totalWeight, color: "bg-yellow-500" },
    { label: "Revenue (Rs)", value: totalRevenue, color: "bg-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className={`${s.color} text-white p-4 rounded-xl shadow`}
        >
          <p className="text-sm">{s.label}</p>
          <h2 className="text-2xl font-bold">{s.value}</h2>
        </div>
      ))}
    </div>
  );
}