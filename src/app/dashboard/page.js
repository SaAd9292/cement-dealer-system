import CementForm from "@/components/CementForm";
import RecordsTable from "@/components/RecordsTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] p-8 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Operations Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage cement entries, records, and dealer transactions
        </p>
      </div>

      {/* TOP KPI STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-600">
          <p className="text-gray-500 text-sm">Today Entries</p>
          <h2 className="text-2xl font-bold text-[#0F172A]">18</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-600">
          <p className="text-gray-500 text-sm">Total Cement (Tons)</p>
          <h2 className="text-2xl font-bold text-[#0F172A]">540</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-purple-600">
          <p className="text-gray-500 text-sm">Active Dealers</p>
          <h2 className="text-2xl font-bold text-[#0F172A]">12</h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* FORM SECTION */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">
            New Cement Entry
          </h2>

          <CementForm />
        </div>

        {/* RECENT RECORDS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">
            Recent Records
          </h2>

          <RecordsTable />
        </div>

      </div>

    </div>
  );
}