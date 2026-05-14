"use client";

import ExpensesManager from "@/components/expenses/ExpensesManager";

export default function ExpensesPage() {
  return (
    <div className="p-4 md:p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Expenses Management
        </h1>

        <p className="text-gray-500 mt-1">
          Track business and transport expenses
        </p>
      </div>

      {/* COMPONENT */}
      <ExpensesManager />

    </div>
  );
}