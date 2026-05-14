"use client";

import { useState } from "react";

export default function ExpensesManager() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      amount: 5000,
      description: "Truck Diesel",
      date: "2026-05-14",
    },
  ]);

  const [form, setForm] = useState({
    amount: "",
    description: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      amount: form.amount,
      description: form.description,
      date: new Date().toISOString().split("T")[0],
    };

    setExpenses([newExpense, ...expenses]);

    setForm({
      amount: "",
      description: "",
    });
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(search.toLowerCase()) ||
      expense.amount.toString().includes(search)
  );

  const totalExpenses = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="space-y-8">

      {/* STATS */}
      <div className="bg-red-600 text-white p-6 rounded-xl shadow-sm">
        <p className="text-sm opacity-90">Total Expenses</p>
        <h2 className="text-3xl font-bold mt-2">
          Rs {totalExpenses.toLocaleString()}
        </h2>
      </div>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          Add New Expense
        </h2>

        <form
          onSubmit={addExpense}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Expense Amount"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Expense Description"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg md:col-span-2 transition"
          >
            Save Expense
          </button>

        </form>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold">Expense Records</h2>

          <input
            type="text"
            placeholder="Search Expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full md:w-80 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* TABLE */}
        <table className="w-full min-w-[700px]">

          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Amount</th>
              <th className="p-3">Description</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => (
                <tr
                  key={expense.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-semibold text-red-600">
                    Rs {expense.amount}
                  </td>

                  <td className="p-3">{expense.description}</td>

                  <td className="p-3">{expense.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-6 text-gray-500">
                  No expense records found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}