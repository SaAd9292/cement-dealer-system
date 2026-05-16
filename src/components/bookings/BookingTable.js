"use client";

export default function BookingTable({ bookings, onDelete, onEdit }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border text-sm">

        <thead>
          <tr className="text-white">

            {/* Basic */}
            <th className="p-2 bg-gray-700">No</th>

            {/* Challan */}
            <th className="p-2 bg-indigo-600">Chk No</th>
            <th className="p-2 bg-indigo-600">Chk Date</th>

            {/* Bank */}
            <th className="p-2 bg-blue-600">Bank Code</th>
            <th className="p-2 bg-blue-600">Bank Name</th>

            {/* Factory */}
            <th className="p-2 bg-green-600">Factory Code</th>
            <th className="p-2 bg-green-600">Factory Name</th>
            <th className="p-2 bg-green-600">Industry</th>

            {/* Booking */}
            <th className="p-2 bg-yellow-600">Booking No</th>
            <th className="p-2 bg-yellow-600">Date</th>
            <th className="p-2 bg-yellow-600">Qty</th>
            <th className="p-2 bg-yellow-600">Rate</th>
            <th className="p-2 bg-yellow-600">Total</th>

            {/* Location */}
            <th className="p-2 bg-purple-600">Province</th>
            <th className="p-2 bg-purple-600">Division</th>
            <th className="p-2 bg-purple-600">City</th>
            <th className="p-2 bg-purple-600">Area</th>

            {/* Contractor */}
            <th className="p-2 bg-pink-600">Contractor Code</th>
            <th className="p-2 bg-pink-600">Contractor Address</th>

            {/* Actions */}
            <th className="p-2 bg-red-600">Actions</th>

          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="20" className="text-center p-4">
                No bookings found
              </td>
            </tr>
          ) : (
            bookings.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">

                {/* Basic */}
                <td className="p-2">{b.bookingNo}</td>

                {/* Challan */}
                <td className="p-2 bg-indigo-50">{b.chkNo}</td>
                <td className="p-2 bg-indigo-50">{b.chkDate}</td>

                {/* Bank */}
                <td className="p-2 bg-blue-50">{b.bankCode}</td>
                <td className="p-2 bg-blue-50">{b.bankName}</td>

                {/* Factory */}
                <td className="p-2 bg-green-50">{b.factoryCode}</td>
                <td className="p-2 bg-green-50">{b.factoryName}</td>
                <td className="p-2 bg-green-50">{b.factoryIndustry}</td>

                {/* Booking */}
                <td className="p-2 bg-yellow-50">{b.bookingNo}</td>
                <td className="p-2 bg-yellow-50">{b.bookingDate}</td>
                <td className="p-2 bg-yellow-50">{b.bookingQty}</td>
                <td className="p-2 bg-yellow-50">{b.bookingRate}</td>
                <td className="p-2 bg-yellow-50 font-bold">{b.totalAmount}</td>

                {/* Location */}
                <td className="p-2 bg-purple-50">{b.provinceName}</td>
                <td className="p-2 bg-purple-50">{b.divisionName}</td>
                <td className="p-2 bg-purple-50">{b.cityName}</td>
                <td className="p-2 bg-purple-50">{b.areaName}</td>

                {/* Contractor */}
                <td className="p-2 bg-pink-50">{b.contractorCode}</td>
                <td className="p-2 bg-pink-50">{b.contractorAddress}</td>

                {/* Actions */}
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => onEdit(b)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(b.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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