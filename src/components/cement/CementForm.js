"use client";

import { useState } from "react";

export default function CementForm({ onSubmit }) {
  const [form, setForm] = useState({
    dealerName: "",
    contactNumber: "",
    address: "",
    driverName: "",
    driverContact: "",
    truckNo: "",
    cementAmount: "",
    amount: "",
    cnicNo: "",
    ntnNo: "",
    areaCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(form);

    setForm({
      dealerName: "",
      contactNumber: "",
      address: "",
      driverName: "",
      driverContact: "",
      truckNo: "",
      cementAmount: "",
      amount: "",
      cnicNo: "",
      ntnNo: "",
      areaCode: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Input name="dealerName" placeholder="Dealer Name" value={form.dealerName} onChange={handleChange} />
        <Input name="contactNumber" placeholder="Contact Number" value={form.contactNumber} onChange={handleChange} />
        <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} />

        <Input name="driverName" placeholder="Driver Name" value={form.driverName} onChange={handleChange} />
        <Input name="driverContact" placeholder="Driver Contact Number" value={form.driverContact} onChange={handleChange} />
        <Input name="truckNo" placeholder="Truck Number (e.g. ABC-123)" value={form.truckNo} onChange={handleChange} />

        <Input name="cementAmount" placeholder="Cement Quantity (Tons)" type="number" value={form.cementAmount} onChange={handleChange} />
        <Input name="amount" placeholder="Total Amount (PKR)" type="number" value={form.amount} onChange={handleChange} />

        <Input name="cnicNo" placeholder="CNIC Number" value={form.cnicNo} onChange={handleChange} />
        <Input name="ntnNo" placeholder="NTN Number" value={form.ntnNo} onChange={handleChange} />
        <Input name="areaCode" placeholder="Area Code" value={form.areaCode} onChange={handleChange} />

      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl"
      >
        Save Entry
      </button>
    </form>
  );
}

function Input({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="border p-2 rounded-xl w-full outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}