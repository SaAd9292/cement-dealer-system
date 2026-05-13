"use client";

import { useState } from "react";

export default function DealersPage() {
  const [dealers, setDealers] = useState([
    {
      id: 1,
      name: "Ali Traders",
      contact: "03001234567",
      address: "Peshawar",
      cnic: "12345-1234567-1",
      ntn: "NTN12345",
      areaCode: "PK-01",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    address: "",
    cnic: "",
    ntn: "",
    areaCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addDealer = (e) => {
    e.preventDefault();

    const newDealer = {
      id: Date.now(),
      ...form,
    };

    setDealers([...dealers, newDealer]);

    setForm({
      name: "",
      contact: "",
      address: "",
      cnic: "",
      ntn: "",
      areaCode: "",
    });
  };

  return (
    <div className="p-6 space-y-8">

      {/* 🔵 HEADER */}
      <h1 className="text-2xl font-bold">Dealers Management</h1>

      {/* 🟢 ADD DEALER FORM */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Dealer</h2>

        <form onSubmit={addDealer} className="grid grid-cols-2 gap-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Dealer Name"
            className="border p-2 rounded"
          />

          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="border p-2 rounded"
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="border p-2 rounded col-span-2"
          />

          <input
            name="cnic"
            value={form.cnic}
            onChange={handleChange}
            placeholder="CNIC No"
            className="border p-2 rounded"
          />

          <input
            name="ntn"
            value={form.ntn}
            onChange={handleChange}
            placeholder="NTN No"
            className="border p-2 rounded"
          />

          <input
            name="areaCode"
            value={form.areaCode}
            onChange={handleChange}
            placeholder="Area Code"
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Add Dealer
          </button>
        </form>
      </div>

      {/* 📋 DEALERS TABLE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Existing Dealers</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Contact</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">CNIC</th>
              <th className="p-2 border">NTN</th>
              <th className="p-2 border">Area Code</th>
            </tr>
          </thead>

          <tbody>
            {dealers.map((d) => (
              <tr key={d.id} className="text-center">
                <td className="border p-2">{d.name}</td>
                <td className="border p-2">{d.contact}</td>
                <td className="border p-2">{d.address}</td>
                <td className="border p-2">{d.cnic}</td>
                <td className="border p-2">{d.ntn}</td>
                <td className="border p-2">{d.areaCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}