"use client";

import { useState } from "react";
import TrucksForm from "@/components/trucks/TrucksForm";
import TrucksTable from "@/components/trucks/TrucksTable";

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

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ADD TRUCK
  const addTruck = () => {
    if (!form.driverName || !form.truckNo || !form.driverContact) return;

    const newTruck = {
      id: Date.now(),
      ...form,
    };

    setTrucks((prev) => [...prev, newTruck]);

    setForm({
      driverName: "",
      truckNo: "",
      driverContact: "",
    });
  };

  // DELETE TRUCK
  const deleteTruck = (id) => {
    const updated = trucks.filter((t) => t.id !== id);
    setTrucks(updated);
  };

  // EDIT TRUCK
  const editTruck = (truck) => {
    setEditingId(truck.id);

    setForm({
      driverName: truck.driverName || "",
      truckNo: truck.truckNo || "",
      driverContact: truck.driverContact || "",
    });
  };

  // UPDATE TRUCK
  const updateTruck = () => {
    const updated = trucks.map((t) =>
      t.id === editingId
        ? { ...t, ...form }
        : t
    );

    setTrucks(updated);

    setEditingId(null);
    setForm({
      driverName: "",
      truckNo: "",
      driverContact: "",
    });
  };

  // SAFE SEARCH FILTER (FIXED CRASH ISSUE)
  const filteredTrucks = trucks.filter((truck) =>
    (truck.truckNo || "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    (truck.driverName || "")
      .toLowerCase()
      .includes(search.toLowerCase())
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

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search trucks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-full md:w-80"
      />

      {/* FORM */}
      <TrucksForm
        form={form}
        editingId={editingId}
        onChange={handleChange}
        onAdd={addTruck}
        onUpdate={updateTruck}
      />

      {/* TABLE */}
      <TrucksTable
        trucks={filteredTrucks}
        onDelete={deleteTruck}
        onEdit={editTruck}
      />
    </div>
  );
}