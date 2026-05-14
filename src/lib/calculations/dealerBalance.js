import {
  getCementEntries,
} from "@/lib/storage/cementStorage";
import { getPayments } from "@/lib/storage/paymentsStorage";

export const getDealerBalance = (dealerName) => {
  const entries = getCementEntries();
  const payments = getPayments();

  const totalBought = entries
    .filter(e => e.dealerName === dealerName)
    .reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const totalPaid = payments
    .filter(p => p.dealerName === dealerName)
    .reduce((sum, p) => sum + Number(p.amountPaid || 0), 0);

  return totalBought - totalPaid;
};