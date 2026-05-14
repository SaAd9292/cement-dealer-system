import { getDealers, saveDealers } from "./storage/dealerStorage";

export const updateDealerBalance = (
  dealerName,
  amount
) => {
  const dealers = getDealers();

  const updatedDealers = dealers.map((dealer) => {
    if (dealer.dealerName === dealerName) {
      return {
        ...dealer,
        outstandingBalance:
          Number(dealer.outstandingBalance || 0) +
          Number(amount || 0),

        totalPurchases:
          Number(dealer.totalPurchases || 0) +
          Number(amount || 0),
      };
    }

    return dealer;
  });

  saveDealers(updatedDealers);
};