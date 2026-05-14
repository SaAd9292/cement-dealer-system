"use client";

import { useState } from "react";

export default function TrucksPage() {
  const [trucks, setTrucks] = useState([
    {
      id: 1,
      driverName: "Khan",
      truckNo: "ABC-123",
      driverContact: "03001234567",
    },
    {
      id: 2,
      driverName: "Ali",
      truckNo: "XYZ-456",
      driverContact: "03111234567",
    },
  ]);

  const [form, setForm] = useState({
    driverName: "",
    truckNo: "",
    driverContact: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addTruck = (e) => {
    e.preventDefault();

    const newTruck = {
      id: Date.now(),
      ...form,
    };

    setTrucks([...trucks, newTruck]);

    setForm({
      driverName: "",
      truckNo: "",
      driverContact: "",
    });
  };

  const filteredTrucks = trucks.filter(
    (truck) =>
      truck.truckNo.toLowerCase().includes(search.toLowerCase()) ||
      truck.driverName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Truck Management
        </h1>

        <p className="text-gray-500 mt-1">
          Manage truck drivers and transport records
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          Add New Truck
        </h2>

        <form
          onSubmit={addTruck}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          {/* DRIVER NAME */}
          <input
            type="text"
            name="driverName"
            value={form.driverName}
            onChange={handleChange}
            placeholder="Driver Name"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* TRUCK NUMBER */}
          <input
            type="text"
            name="truckNo"
            value={form.truckNo}
            onChange={handleChange}
            placeholder="Truck Number"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* DRIVER CONTACT */}
          <input
            type="text"
            name="driverContact"
            value={form.driverContact}
            onChange={handleChange}
            placeholder="Driver Contact Number"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg md:col-span-2 transition"
          >
            Save Truck Record
          </button>

        </form>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">

          <h2 className="text-xl font-semibold">
            Truck Records
          </h2>

          {/* SEARCH FILTER */}
          <input
            type="text"
            placeholder="Search by Truck No or Driver..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full md:w-80 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <table className="w-full min-w-[600px]">

          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Driver Name</th>
              <th className="p-3">Truck No</th>
              <th className="p-3">Driver Contact</th>
            </tr>
          </thead>

          <tbody>
            {filteredTrucks.length > 0 ? (
              filteredTrucks.map((truck) => (
                <tr
                  key={truck.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{truck.driverName}</td>
                  <td className="p-3 font-medium text-blue-700">
                    {truck.truckNo}
                  </td>
                  <td className="p-3">{truck.driverContact}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center p-6 text-gray-500"
                >
                  No truck records found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}