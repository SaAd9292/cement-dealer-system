"use client";

export default function BookingForm({
  formData,
  handleChange,
  handleSubmit,
}) {
  const v = (val) => val || "";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      {/* ================= CHALLAN + BANK ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-50 p-2 rounded">
        <input name="chkNo" placeholder="Chk No"
          value={v(formData.chkNo)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="chkDate" type="date"
          value={v(formData.chkDate)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="bankCode" placeholder="Bank Code"
          value={v(formData.bankCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="bankName" placeholder="Bank Name"
          value={v(formData.bankName)} onChange={handleChange}
          className="border p-1 rounded text-sm" />
      </div>

      {/* ================= FACTORY ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-gray-50 p-2 rounded">
        <input name="factoryCode" placeholder="Factory Code"
          value={v(formData.factoryCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="factoryName" placeholder="Factory Name"
          value={v(formData.factoryName)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="factoryIndustry" placeholder="Industry"
          value={v(formData.factoryIndustry)} onChange={handleChange}
          className="border p-1 rounded text-sm" />
      </div>

      {/* ================= BOOKING ================= */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-gray-50 p-2 rounded">
        <input name="bookingNo" placeholder="Booking No"
          value={v(formData.bookingNo)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="bookingDate" type="date"
          value={v(formData.bookingDate)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="bookingQty" type="number" placeholder="Qty"
          value={v(formData.bookingQty)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="bookingRate" type="number" placeholder="Rate"
          value={v(formData.bookingRate)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="totalAmount" readOnly placeholder="Total"
          value={v(formData.totalAmount)}
          className="border p-1 rounded text-sm bg-gray-100" />
      </div>

      {/* ================= LOCATION ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-50 p-2 rounded">
        <input name="provinceCode" placeholder="Prov Code"
          value={v(formData.provinceCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="provinceName" placeholder="Province"
          value={v(formData.provinceName)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="divisionCode" placeholder="Div Code"
          value={v(formData.divisionCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="divisionName" placeholder="Division"
          value={v(formData.divisionName)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="cityCode" placeholder="City Code"
          value={v(formData.cityCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="cityName" placeholder="City"
          value={v(formData.cityName)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="areaCode" placeholder="Area Code"
          value={v(formData.areaCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="areaName" placeholder="Area"
          value={v(formData.areaName)} onChange={handleChange}
          className="border p-1 rounded text-sm" />
      </div>

      {/* ================= CONTRACTOR ================= */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2 bg-gray-50 p-2 rounded">
        <input name="contractorCode" placeholder="Contractor Code"
          value={v(formData.contractorCode)} onChange={handleChange}
          className="border p-1 rounded text-sm" />

        <input name="contractorAddress" placeholder="Contractor Address"
          value={v(formData.contractorAddress)} onChange={handleChange}
          className="border p-1 rounded text-sm" />
      </div>

      {/* ================= SUBMIT ================= */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Save Booking
      </button>

    </form>
  );
}