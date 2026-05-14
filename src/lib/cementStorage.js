const STORAGE_KEY = "cement_entries";

export function getCementEntries() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function addCementEntry(entry) {
  const existing = getCementEntries();

  const updated = [
    { id: Date.now(), ...entry, createdAt: new Date().toISOString() },
    ...existing,
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteCementEntry(id) {
  const existing = getCementEntries();
  const updated = existing.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function updateCementEntry(id, newData) {
  const existing = getCementEntries();

  const updated = existing.map((item) =>
    item.id === id ? { ...item, ...newData } : item
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}