// src/app/payments/page.js

"use client";

import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  const [form, setForm] = useState({
    dealerName: "",
    amount: "",
    method: "Cash",
    notes: "",
  });

  // LOAD PAYMENTS
  useEffect(() => {
    const storedPayments =
      JSON.parse(localStorage.getItem("payments")) || [];

    setPayments(storedPayments);
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE PAYMENT
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPayment = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleDateString(),
    };

    // SAVE PAYMENT RECORD
    const updatedPayments = [newPayment, ...payments];

    setPayments(updatedPayments);

    localStorage.setItem(
      "payments",
      JSON.stringify(updatedPayments)
    );

    // UPDATE DEALER BALANCE
    const dealers =
      JSON.parse(localStorage.getItem("dealers")) || [];

    const updatedDealers = dealers.map((dealer) => {
      if (dealer.dealerName === form.dealerName) {
        return {
          ...dealer,

          outstandingBalance:
            Number(dealer.outstandingBalance || 0) -
            Number(form.amount || 0),

          totalPayments:
            Number(dealer.totalPayments || 0) +
            Number(form.amount || 0),
        };
      }

      return dealer;
    });

    localStorage.setItem(
      "dealers",
      JSON.stringify(updatedDealers)
    );

    // RESET FORM
    setForm({
      dealerName: "",
      amount: "",
      method: "Cash",
      notes: "",
    });

    alert("Payment Saved Successfully");
  };

  // DELETE PAYMENT
  const deletePayment = (id) => {
    const filteredPayments = payments.filter(
      (payment) => payment.id !== id
    );

    setPayments(filteredPayments);

    localStorage.setItem(
      "payments",
      JSON.stringify(filteredPayments)
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">

      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Payments Management
        </h1>

        <p className="text-gray-500 mt-1">
          Record and manage dealer payments
        </p>
      </div>

      {/* PAYMENT FORM */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Add Payment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          {/* DEALER NAME */}
          <input
            type="text"
            name="dealerName"
            placeholder="Dealer Name"
            value={form.dealerName}
            onChange={handleChange}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* PAYMENT AMOUNT */}
          <input
            type="number"
            name="amount"
            placeholder="Payment Amount"
            value={form.amount}
            onChange={handleChange}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* PAYMENT METHOD */}
          <select
            name="method"
            value={form.method}
            onChange={handleChange}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">
              Bank Transfer
            </option>
            <option value="Cheque">Cheque</option>
          </select>

          {/* NOTES */}
          <input
            type="text"
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Save Payment
          </button>

        </form>
      </div>

      {/* PAYMENTS TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">
            Payment Records
          </h2>
        </div>

        {payments.length === 0 ? (
          <div className="p-6 text-gray-500">
            No payments found
          </div>
        ) : (
          <table className="w-full min-w-[900px]">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Dealer</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Method</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Notes</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-gray-50 text-sm"
                >

                  <td className="p-3 border">
                    {payment.dealerName}
                  </td>

                  <td className="p-3 border">
                    Rs. {payment.amount}
                  </td>

                  <td className="p-3 border">
                    {payment.method}
                  </td>

                  <td className="p-3 border">
                    {payment.date}
                  </td>

                  <td className="p-3 border">
                    {payment.notes}
                  </td>

                  <td className="p-3 border">
                    <button
                      onClick={() =>
                        deletePayment(payment.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
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