"use client";

export default function TrucksTable({
  trucks = [],
  onDelete,
  onEdit,
}) {

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">

      <h2 className="text-xl font-semibold mb-4">
        Truck Records
      </h2>

      <table className="w-full min-w-[600px]">

        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Driver Name</th>
            <th className="p-3">Truck No</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>

          {trucks.length === 0 ? (

            <tr>
              <td
                colSpan="4"
                className="text-center p-6 text-gray-500"
              >
                No trucks found
              </td>
            </tr>

          ) : (

            trucks.map((truck) => (

              <tr
                key={truck.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">
                  {truck.driverName}
                </td>

                <td className="p-3 font-semibold text-blue-600">
                  {truck.truckNo}
                </td>

                <td className="p-3">
                  {truck.driverContact}
                </td>

                <td className="p-3 flex gap-2">

                  <button
                    type="button"
                    onClick={() => onEdit(truck)}
                    className="bg-yellow-500 px-3 py-1 rounded text-white"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete(truck.id)}
                    className="bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}