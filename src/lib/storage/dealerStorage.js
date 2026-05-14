export const getDealers = () => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("dealers")) || [];
};

export const saveDealers = (dealers) => {
  localStorage.setItem(
    "dealers",
    JSON.stringify(dealers)
  );
};

export const addDealer = (dealer) => {
  const dealers = getDealers();

  const updatedDealers = [
    {
      ...dealer,
      id: Date.now(),
      outstandingBalance: 0,
      totalPurchases: 0,
      totalPayments: 0,
    },
    ...dealers,
  ];

  saveDealers(updatedDealers);

  return updatedDealers;
};