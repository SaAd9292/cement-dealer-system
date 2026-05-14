import { addCementEntry } from "@/lib/storage/cementStorage";

export function createCementEntry(form) {
  return addCementEntry({
    ...form,
    date: new Date().toISOString(),
  });
}