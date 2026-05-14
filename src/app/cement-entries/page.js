"use client";

import { useEffect, useState } from "react";

import {
  getCementEntries,
  deleteCementEntry,
  updateCementEntry,
} from "@/lib/storage/cementStorage";

export default function CementEntriesPage() {

  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    setEntries(getCementEntries());
  }, []);

  // DELETE
  const handleDelete = (id) => {
    const updated = deleteCementEntry(id);
    setEntries(updated);
  };

  // START EDIT
  const startEdit = (item) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  // CHANGE INPUT
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE EDIT
  const saveEdit = () => {
    const updated = updateCementEntry(editForm);
    setEntries(updated);
    setEditingId(null);
  };

  // RENDER CELL
  const render = (item, key) =>
    editingId === item.id ? (
      <input
        name={key}
        value={editForm[key] || ""}
        onChange={handleChange}
        className="border p-2 rounded-lg w-full"
      />
    ) : (
      item[key]
    );

  return (
    <div className="p-6 bg-[#F5F7FB] min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Cement Entries
        </h1>
        <p className="text-gray-500 mt-1">
          Manage all shipment, dealer and transport records
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">

        <table className="w-full min-w-[1500px]">

          {/* GROUP HEADER */}
          <thead>

            <tr className="text-white text-sm">

              <th colSpan="6" className="bg-blue-700 p-4 text-left">
                Dealer Information
              </th>

              <th colSpan="3" className="bg-green-700 p-4 text-left">
                Transport Information
              </th>

              <th colSpan="1" className="bg-yellow-600 p-4 text-left">
                Cement Data
              </th>

              <th colSpan="1" className="bg-purple-700 p-4 text-left">
                Financial
              </th>

              <th colSpan="1" className="bg-gray-700 p-4 text-left">
                Actions
              </th>

            </tr>

            {/* COLUMN HEADER */}
            <tr className="text-sm font-semibold">

              {/* DEALER */}
              <th className="p-3 bg-blue-100">Dealer</th>
              <th className="p-3 bg-blue-100">Dealer Contact</th>
              <th className="p-3 bg-blue-100">Address</th>
              <th className="p-3 bg-blue-100">CNIC</th>
              <th className="p-3 bg-blue-100">NTN</th>
              <th className="p-3 bg-blue-100">Area</th>

              {/* TRANSPORT */}
              <th className="p-3 bg-green-100">Driver</th>
              <th className="p-3 bg-green-100">Driver Contact</th>
              <th className="p-3 bg-green-100">Truck No</th>

              {/* CEMENT */}
              <th className="p-3 bg-yellow-100">Cement (Weight)</th>

              {/* FINANCIAL */}
              <th className="p-3 bg-purple-100">Amount (RS)</th>

              {/* ACTIONS */}
              <th className="p-3 bg-gray-100">Actions</th>

            </tr>

          </thead>

          <tbody>

            {entries.length > 0 ? (

              entries.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  {/* DEALER */}
                  <td className="p-3 bg-blue-50">{render(item, "dealerName")}</td>
                  <td className="p-3 bg-blue-50">{render(item, "contactNumber")}</td>
                  <td className="p-3 bg-blue-50">{render(item, "address")}</td>
                  <td className="p-3 bg-blue-50">{render(item, "cnicNo")}</td>
                  <td className="p-3 bg-blue-50">{render(item, "ntnNo")}</td>
                  <td className="p-3 bg-blue-50">{render(item, "areaCode")}</td>

                  {/* TRANSPORT */}
                  <td className="p-3 bg-green-50">{render(item, "driverName")}</td>
                  <td className="p-3 bg-green-50">{render(item, "driverContact")}</td>
                  <td className="p-3 bg-green-50 font-semibold text-green-700">
                    {render(item, "truckNo")}
                  </td>

                  {/* CEMENT WEIGHT (HIGHLIGHTED) */}
                  <td className="p-3 bg-yellow-50 font-bold text-yellow-700">
                    {render(item, "cementAmount")}
                  </td>

                  {/* FINANCIAL */}
                  <td className="p-3 bg-purple-50 font-bold text-purple-700">
                    {render(item, "amount")}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 bg-gray-50">

                    <div className="flex gap-2">

                      {editingId === item.id ? (
                        <button
                          type="button"
                          onClick={saveEdit}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
                        >
                          Edit
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="12" className="text-center p-8 text-gray-500">
                  No cement entries found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}