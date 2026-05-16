"use client";

import { useEffect, useState } from "react";

import {
  getBookings,
  addBooking,
  deleteBooking,
  updateBooking,
} from "@/lib/storage/bookingStorage.js";

import BookingForm from "@/components/bookings/BookingForm.js";
  import BookingTable from "@/components/bookings/BookingTable.js";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    bookingNo: "",
    bookingDate: "",
    factoryName: "",
    bookingQty: "",
    bookingRate: "",
    totalAmount: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setBookings(getBookings());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...formData, [name]: value };

    updated.totalAmount =
      (parseFloat(updated.bookingQty) || 0) *
      (parseFloat(updated.bookingRate) || 0);

    setFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      updateBooking({ ...formData, id: editingId });
      setEditingId(null);
    } else {
      addBooking(formData);
    }

    setFormData(emptyForm);
    load();
  };

  const handleDelete = (id) => {
    deleteBooking(id);
    load();
  };

  const handleEdit = (b) => {
    setFormData(b);
    setEditingId(b.id);
  };

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Booking Form</h1>

      {/* FORM */}
      <BookingForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* TABLE */}
      <BookingTable
        bookings={bookings}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

    </div>
  );
}