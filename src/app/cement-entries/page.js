"use client";

import { useEffect, useState } from "react";

export default function CementEntriesPage() {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // LOAD DATA
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cementEntries")) || [];
    setEntries(data);
  }, []);

  // DELETE
  const handleDelete = (id) => {
    const updated = entries.filter((item) => item.id !== id);
    setEntries(updated);
    localStorage.setItem("cementEntries", JSON.stringify(updated));
  };

  // START EDIT
  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // SAVE EDIT
  const handleSave = () => {
    const updated = entries.map((item) =>
      item.id === editingId ? editForm : item
    );

    setEntries(updated);
    localStorage.setItem("cementEntries", JSON.stringify(updated));

    setEditingId(null);
    setEditForm({});
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Cement Entries Records
        </h1>
        <p className="text-gray-500 mt-1">
          All saved cement form data (offline system)
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        {entries.length === 0 ? (
          <div className="p-6 text-gray-500">
            No records found — submit form first
          </div>
        ) : (
          <table className="w-full min-w-[1200px] border-collapse">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Dealer</th>
                <th className="p-3 border">Contact</th>
                <th className="p-3 border">Address</th>
                <th className="p-3 border">CNIC</th>
                <th className="p-3 border">NTN</th>
                <th className="p-3 border">Area Code</th>
                <th className="p-3 border">Driver</th>
                <th className="p-3 border">Driver Contact</th>
                <th className="p-3 border">Truck No</th>
                <th className="p-3 border">Cement</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {entries.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 text-sm">

                  {/* Dealer */}
                  <td className="p-2 border">
                    {editingId === item.id ? (
                      <input
                        name="dealerName"
                        value={editForm.dealerName}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.dealerName
                    )}
                  </td>

                  {/* Contact */}
                  <td className="p-2 border">
                    {editingId === item.id ? (
                      <input
                        name="contactNumber"
                        value={editForm.contactNumber}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.contactNumber
                    )}
                  </td>

                  {/* Address */}
                  <td className="p-2 border">{item.address}</td>

                  {/* CNIC */}
                  <td className="p-2 border">{item.cnicNo}</td>

                  {/* NTN */}
                  <td className="p-2 border">{item.ntnNo}</td>

                  {/* Area Code */}
                  <td className="p-2 border">{item.areaCode}</td>

                  {/* Driver */}
                  <td className="p-2 border">
                    {editingId === item.id ? (
                      <input
                        name="driverName"
                        value={editForm.driverName}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.driverName
                    )}
                  </td>

                  {/* Driver Contact */}
                  <td className="p-2 border">
                    {editingId === item.id ? (
                      <input
                        name="driverContact"
                        value={editForm.driverContact}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.driverContact
                    )}
                  </td>

                  {/* Truck */}
                  <td className="p-2 border">{item.truckNo}</td>

                  {/* Cement */}
                  <td className="p-2 border">
                    {editingId === item.id ? (
                      <input
                        name="cementAmount"
                        value={editForm.cementAmount}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.cementAmount
                    )}
                  </td>

                  {/* Amount */}
                  <td className="p-2 border">
                    {editingId === item.id ? (
                      <input
                        name="amount"
                        value={editForm.amount}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.amount
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-2 border space-x-2">

                    {editingId === item.id ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-gray-500 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        )}

      </div>
    </div>
  );
}