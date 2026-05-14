"use client";

import { useEffect, useState } from "react";

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

  // Save to storage helper
  const saveToStorage = (updated) => {
    localStorage.setItem("dealers", JSON.stringify(updated));
    setDealers(updated);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // DELETE
  const handleDelete = (id) => {
    const filtered = dealers.filter((d) => d.id !== id);
    saveToStorage(filtered);
  };

  // EDIT (load data into form)
  const handleEdit = (dealer) => {
    setEditingId(dealer.id);
    setForm(dealer);
  };

  // UPDATE SAVE
  const handleUpdate = () => {
    const updated = dealers.map((d) =>
      d.id === editingId ? { ...form, id: editingId } : d
    );

    saveToStorage(updated);
    setEditingId(null);

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
    <div className="min-h-screen bg-[#F5F7FB] p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">Dealers Management</h1>

      {/* FORM */}
      <div className="bg-white p-5 rounded-xl shadow mb-6 grid grid-cols-2 gap-4">

        <input
          name="dealerName"
          placeholder="Dealer Name"
          value={form.dealerName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="contactNumber"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
        />

        <input
          name="cnicNo"
          placeholder="CNIC"
          value={form.cnicNo}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="ntnNo"
          placeholder="NTN"
          value={form.ntnNo}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="areaCode"
          placeholder="Area Code"
          value={form.areaCode}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {editingId ? (
          <button
            onClick={handleUpdate}
            className="col-span-2 bg-green-600 text-white p-2 rounded"
          >
            Update Dealer
          </button>
        ) : (
          <button
            onClick={() => {
              const newDealer = {
                ...form,
                id: Date.now(),
              };

              const updated = [...dealers, newDealer];
              saveToStorage(updated);

              setForm({
                dealerName: "",
                contactNumber: "",
                address: "",
                cnicNo: "",
                ntnNo: "",
                areaCode: "",
              });
            }}
            className="col-span-2 bg-blue-600 text-white p-2 rounded"
          >
            Save Dealer
          </button>
        )}
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[800px]">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Contact</th>
              <th className="p-3 border">Address</th>
              <th className="p-3 border">CNIC</th>
              <th className="p-3 border">NTN</th>
              <th className="p-3 border">Area</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dealers.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50">

                <td className="p-2 border">{d.dealerName}</td>
                <td className="p-2 border">{d.contactNumber}</td>
                <td className="p-2 border">{d.address}</td>
                <td className="p-2 border">{d.cnicNo}</td>
                <td className="p-2 border">{d.ntnNo}</td>
                <td className="p-2 border">{d.areaCode}</td>

                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => handleEdit(d)}
                    className="bg-yellow-500 px-3 py-1 rounded text-white"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(d.id)}
                    className="bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}