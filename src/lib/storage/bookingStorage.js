const STORAGE_KEY = "bookings";

/* GET */
export const getBookings = () => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/* ADD */
export const addBooking = (booking) => {
  const bookings = getBookings();

  const newBooking = {
    ...booking,
    id: Date.now(),
  };

  bookings.push(newBooking);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};

/* DELETE */
export const deleteBooking = (id) => {
  const bookings = getBookings();

  const updated = bookings.filter((b) => b.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

/* UPDATE */
export const updateBooking = (updatedBooking) => {
  const bookings = getBookings();

  const updated = bookings.map((b) =>
    b.id === updatedBooking.id ? updatedBooking : b
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};