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
    driverName: "",
    truckNo: "",
    driverContact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // create new record
    const newRecord = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleString(),
    };

    // IMPORTANT: SAME KEY USED IN ENTRIES PAGE
    const existingRecords =
      JSON.parse(localStorage.getItem("cementEntries")) || [];

    const updatedRecords = [newRecord, ...existingRecords];

    localStorage.setItem("cementEntries", JSON.stringify(updatedRecords));

    alert("Cement Entry Saved Successfully!");

    // reset form
    setForm({
      dealerName: "",
      contactNumber: "",
      address: "",
      cnicNo: "",
      ntnNo: "",
      areaCode: "",
      amount: "",
      cementAmount: "",
      driverName: "",
      truckNo: "",
      driverContact: "",
    });
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md">
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

        {/* Contact */}
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
          type="number"
          placeholder="Amount (Rs)"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Cement Amount */}
        <input
          name="cementAmount"
          type="number"
          placeholder="Cement (Ton)"
          value={form.cementAmount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Driver Name */}
        <input
          name="driverName"
          placeholder="Driver Name"
          value={form.driverName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Truck No */}
        <input
          name="truckNo"
          placeholder="Truck No"
          value={form.truckNo}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Driver Contact */}
        <input
          name="driverContact"
          placeholder="Driver Contact"
          value={form.driverContact}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save Cement Entry
        </button>
      </form>
    </div>
  );
}