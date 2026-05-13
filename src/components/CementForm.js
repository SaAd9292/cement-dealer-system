"use client";

import { useState } from "react";

export default function CementForm() {
  const [form, setForm] = useState({
    dealerName: "",
    contactNumber: "",
    address: "",
    cnicNo: "",
    ntnNo: "",
    areaCode: "",
    amount: "",
    cementAmount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Record Saved (check console)");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Cement Entry Form</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        {/* Dealer Name */}
        <input
          name="dealerName"
          placeholder="Dealer Name"
          value={form.dealerName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Contact Number */}
        <input
          name="contactNumber"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Address */}
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
        />

        {/* CNIC */}
        <input
          name="cnicNo"
          placeholder="CNIC No"
          value={form.cnicNo}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* NTN */}
        <input
          name="ntnNo"
          placeholder="NTN No"
          value={form.ntnNo}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Area Code */}
        <input
          name="areaCode"
          placeholder="Area Code"
          value={form.areaCode}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Amount */}
        <input
          name="amount"
          placeholder="Amount (Rs)"
          type="number"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Cement Amount */}
        <input
          name="cementAmount"
          placeholder="Cement Amount (Ton)"
          type="number"
          value={form.cementAmount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save Record
        </button>
      </form>
    </div>
  );
}