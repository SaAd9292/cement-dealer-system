"use client";

export default function DealersTable({
  dealers,
  onEdit,
  onDelete,
}) {
  return (
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
                  onClick={() => onEdit(d)}
                  className="bg-yellow-500 px-3 py-1 rounded text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(d.id)}
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
  );
}