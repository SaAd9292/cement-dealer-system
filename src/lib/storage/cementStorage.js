const STORAGE_KEY = "cement_entries";

// GET
export function getCementEntries() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// ADD
export function addCementEntry(entry) {
  const entries = getCementEntries();
  const updated = [...entries, entry];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

// DELETE
export function deleteCementEntry(index) {
  const entries = getCementEntries();
  const updated = entries.filter((_, i) => i !== index);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

// UPDATE
export function updateCementEntry(index, newEntry) {
  const entries = getCementEntries();
  entries[index] = newEntry;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  return entries;
}

// CLEAR
export function clearCementEntries() {
  localStorage.removeItem(STORAGE_KEY);
}