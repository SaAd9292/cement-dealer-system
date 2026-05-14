"use client";

import { useEffect, useState } from "react";

import DealerForm from "@/components/dealers/DealerForm";
import DealersTable from "@/components/dealers/DealersTable";

export default function DealersPage() {
  const [dealers, setDealers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    dealerName: "",
    contactNumber: "",
    address: "",
    cnicNo: "",
    ntnNo: "",
    areaCode: "",
  });

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dealers")) || [];
    setDealers(data);
  }, []);

  // Save helper
  const saveToStorage = (updated) => {
    localStorage.setItem("dealers", JSON.stringify(updated));
    setDealers(updated);
  };

  // Input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // DELETE
  const handleDelete = (id) => {
    const filtered = dealers.filter((d) => d.id !== id);
    saveToStorage(filtered);
  };

  // EDIT
  const handleEdit = (dealer) => {
    setEditingId(dealer.id);
    setForm(dealer);
  };

  // UPDATE
  const handleUpdate = () => {
    const updated = dealers.map((d) =>
      d.id === editingId ? { ...form, id: editingId } : d
    );

    saveToStorage(updated);
    setEditingId(null);

    resetForm();
  };

  // ADD
  const handleAdd = () => {
    const newDealer = {
      ...form,
      id: Date.now(),
    };

    saveToStorage([...dealers, newDealer]);
    resetForm();
  };

  // RESET FORM
  const resetForm = () => {
    setForm({
      dealerName: "",
      contactNumber: "",
      address: "",
      cnicNo: "",
      ntnNo: "",
      areaCode: "",
    });
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Dealers Management</h1>
        <p className="text-gray-500 mt-1">
          Add, update, and manage cement dealers
        </p>
      </div>

      {/* FORM COMPONENT */}
      <DealerForm
        form={form}
        editingId={editingId}
        onChange={handleChange}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />

      {/* TABLE COMPONENT */}
      <DealersTable
        dealers={dealers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}