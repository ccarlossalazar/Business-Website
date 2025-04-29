import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());
  const [bookings, setBookings] = useState({});
  const [form, setForm] = useState({
    description: "",
    name: "",
    start: "",
    end: "",
    address: "",
    city: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const formattedDate = date.toISOString().split("T")[0];
  const todaysBookings = bookings[formattedDate] || [];

  //  Fetch bookings from Firestore
  const fetchBookings = async () => {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const data = {};
    querySnapshot.forEach((docSnap) => {
      const booking = docSnap.data();
      const date = booking.date;
      if (!data[date]) data[date] = [];
      data[date].push({ ...booking, id: docSnap.id });
    });
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      description: "",
      name: "",
      start: "",
      end: "",
      address: "",
      city: "",
    });
    setEditingIndex(null);
  };

  //  Save to Firestore
  const handleSave = async () => {
    if (
      !form.description ||
      !form.name ||
      !form.start ||
      !form.end ||
      !form.address ||
      !form.city
    )
      return;

    const bookingData = { ...form, date: formattedDate };

    if (editingIndex !== null) {
      // Updating existing booking
      const bookingId = todaysBookings[editingIndex].id;
      await setDoc(doc(db, "bookings", bookingId), bookingData);
    } else {
      // Adding new booking
      await addDoc(collection(db, "bookings"), bookingData);
    }

    await fetchBookings(); // Refresh bookings from Firestore
    resetForm();
  };

  //  Edit (prefill the form)
  const handleEdit = (index) => {
    const booking = todaysBookings[index];
    setForm({
      description: booking.description,
      name: booking.name,
      start: booking.start,
      end: booking.end,
      address: booking.address,
      city: booking.city,
    });
    setEditingIndex(index);
  };

  //  Delete from Firestore
  const handleDelete = async (index) => {
    const bookingId = todaysBookings[index].id;
    await deleteDoc(doc(db, "bookings", bookingId));
    await fetchBookings(); // Refresh bookings
    resetForm();
  };

  return (
    <div className="bg-white rounded-lg shadow p-8 w-full max-w-6xl mx-auto flex space-x-6 text-black">
      {/* Left side: Calendar */}
      <div className="w-1/2">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={({ date, view }) => {
            const d = date.toISOString().split("T")[0];
            if (view === "month" && bookings[d] && bookings[d].length > 0) {
              return "has-booking";
            }
            return null;
          }}
        />
        <h2 className="mt-4 font-semibold text-lg">{formattedDate}</h2>

        {todaysBookings.length === 0 ? (
          <p className="text-gray-600 mt-2">No bookings for this date.</p>
        ) : (
          <div className="mt-3 space-y-3">
            {todaysBookings.map((b, index) => (
              <div key={index} className="border p-3 rounded bg-gray-100">
                <p><span className="font-semibold">Description:</span> {b.description}</p>
                <p><span className="font-semibold">Name:</span> {b.name}</p>
                <p><span className="font-semibold">Time:</span> {b.start} - {b.end}</p>
                <p><span className="font-semibold">Address:</span> {b.address}</p>
                <p><span className="font-semibold">City:</span> {b.city}</p>
                <div className="space-x-2 mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-400 px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right side: Form */}
      <div className="w-1/2 space-y-2">
        <h3 className="text-xl font-semibold mb-2">
          {editingIndex !== null ? "Edit Booking" : "Add Booking"}
        </h3>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <div className="flex space-x-2">
          <input
            type="time"
            name="start"
            value={form.start}
            onChange={handleChange}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="time"
            name="end"
            value={form.end}
            onChange={handleChange}
            className="border p-2 rounded w-1/2"
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <div className="space-x-2">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {editingIndex !== null ? "Update Booking" : "Add Booking"}
          </button>
          {editingIndex !== null && (
            <button
              onClick={resetForm}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
