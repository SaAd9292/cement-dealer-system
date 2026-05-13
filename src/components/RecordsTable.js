const data = [
  { truckNo: "ABC-123", invoiceNo: "INV-001", weight: 20, dealer: "Ali Traders" },
  { truckNo: "XYZ-456", invoiceNo: "INV-002", weight: 25, dealer: "Khan Cement" }
];

export default function RecordsTable() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-3">Recent Records</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Truck</th>
            <th>Invoice</th>
            <th>Weight</th>
            <th>Dealer</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-2">{item.truckNo}</td>
              <td>{item.invoiceNo}</td>
              <td>{item.weight} tons</td>
              <td>{item.dealer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}