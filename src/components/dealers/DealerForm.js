"use client";

export default function DealerForm({
  form,
  editingId,
  onChange,
  onAdd,
  onUpdate,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow grid grid-cols-2 gap-4">

      <input
        name="dealerName"
        placeholder="Dealer Name"
        value={form.dealerName}
        onChange={onChange}
        className="border p-2 rounded"
      />

      <input
        name="contactNumber"
        placeholder="Contact Number"
        value={form.contactNumber}
        onChange={onChange}
        className="border p-2 rounded"
      />

      <input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={onChange}
        className="border p-2 rounded col-span-2"
      />

      <input
        name="cnicNo"
        placeholder="CNIC"
        value={form.cnicNo}
        onChange={onChange}
        className="border p-2 rounded"
      />

      <input
        name="ntnNo"
        placeholder="NTN"
        value={form.ntnNo}
        onChange={onChange}
        className="border p-2 rounded"
      />

      <input
        name="areaCode"
        placeholder="Area Code"
        value={form.areaCode}
        onChange={onChange}
        className="border p-2 rounded"
      />

      {editingId ? (
        <button
          onClick={onUpdate}
          className="col-span-2 bg-green-600 text-white p-2 rounded"
        >
          Update Dealer
        </button>
      ) : (
        <button
          onClick={onAdd}
          className="col-span-2 bg-blue-600 text-white p-2 rounded"
        >
          Save Dealer
        </button>
      )}

    </div>
  );
}