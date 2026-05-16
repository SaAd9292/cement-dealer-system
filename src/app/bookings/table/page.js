"use client";

import { useEffect, useState } from "react";
import BookingTable from "@/components/bookings/BookingTable";
import { getBookings, deleteBooking } from "@/lib/storage/bookingStorage";

export default function BookingTablePage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    setBookings(getBookings());
  };

  const handleDelete = (id) => {
    deleteBooking(id);
    loadBookings();
  };

  const handleEdit = (b) => {
    console.log("Edit booking:", b);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Booking Table
      </h1>

      <BookingTable
        bookings={bookings}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

    </div>
  );
}