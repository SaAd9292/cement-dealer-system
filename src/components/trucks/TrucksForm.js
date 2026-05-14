"use client";

export default function TrucksForm({
  form,
  editingId,
  onChange,
  onAdd,
  onUpdate,
}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      onUpdate();
    } else {
      onAdd();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm"
    >

      <h2 className="text-xl font-semibold mb-4">
        {editingId ? "Update Truck" : "Add New Truck"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          name="driverName"
          value={form.driverName}
          onChange={onChange}
          placeholder="Driver Name"
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="truckNo"
          value={form.truckNo}
          onChange={onChange}
          placeholder="Truck Number"
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="driverContact"
          value={form.driverContact}
          onChange={onChange}
          placeholder="Driver Contact"
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg md:col-span-2 transition"
        >
          {editingId ? "Update Truck" : "Save Truck"}
        </button>

      </div>

    </form>
  );
}