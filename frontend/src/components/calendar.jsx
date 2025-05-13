import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());
  const [clients, setClients] = useState([]);
  const [bookings, setBookings] = useState({});
  const [selectedClientId, setSelectedClientId] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [editingInfo, setEditingInfo] = useState(null);

  const formattedDate = date.toISOString().split("T")[0];

  useEffect(() => {
    fetchClientsAndBookings();
  }, []);

  const fetchClientsAndBookings = async () => {
    const querySnapshot = await getDocs(collection(db, "client-estimates"));
    const allClients = [];
    const dateBookings = {};

    querySnapshot.forEach((docSnap) => {
      const client = { id: docSnap.id, ...docSnap.data() };
      allClients.push(client);

      if (client.bookings) {
        client.bookings.forEach((booking, i) => {
          const date = booking.date;
          if (!dateBookings[date]) dateBookings[date] = [];
          dateBookings[date].push({ ...booking, client, bookingIndex: i });
        });
      }
    });

    setClients(allClients);
    setBookings(dateBookings);
  };

  const handleSave = async () => {
    if (!selectedClientId || !start || !end) return;

    const bookingData = {
      date: formattedDate,
      start,
      end,
    };

    const clientRef = doc(db, "client-estimates", selectedClientId);
    const clientSnap = await getDoc(clientRef);
    const existingBookings = clientSnap.data().bookings || [];

    if (editingInfo) {
      const updatedBookings = existingBookings.map((b, i) =>
        i === editingInfo.bookingIndex ? bookingData : b
      );
      await updateDoc(clientRef, { bookings: updatedBookings });
    } else {
      await updateDoc(clientRef, {
        bookings: [...existingBookings, bookingData],
      });
    }

    setSelectedClientId("");
    setStart("");
    setEnd("");
    setEditingInfo(null);
    await fetchClientsAndBookings();
  };

  const handleDelete = async (userId, bookingIndex) => {
    try {
      const userRef = doc(db, "client-estimates", userId);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      const updatedBookings = userData.bookings.filter((_, i) => i !== bookingIndex);

      await updateDoc(userRef, { bookings: updatedBookings });
      await fetchClientsAndBookings();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleEdit = (clientId, booking) => {
    setSelectedClientId(clientId);
    setStart(booking.start);
    setEnd(booking.end);
    setEditingInfo(booking);
  };

  const todaysBookings = bookings[formattedDate] || [];

  return (
    <div className="bg-white rounded-xl shadow p-8 w-full max-w-6xl mx-auto flex space-x-6 text-black ">
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
                <p><span className="font-semibold">Name:</span> {b.client.firstname} {b.client.lastname}</p>
                <p><span className="font-semibold">Email:</span> {b.client.email}</p>
                <p><span className="font-semibold">Phone:</span> {b.client.phone}</p>
                <p><span className="font-semibold">Address:</span> {b.client.address}</p>
                <p><span className="font-semibold">Zip:</span> {b.client.zip}</p>
                <p><span className="font-semibold">Time:</span> {b.start} - {b.end}</p>
                <div className="space-x-2 mt-2">
                  <button
                    onClick={() => handleEdit(b.client.id, b)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(b.client.id, b.bookingIndex)}
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
          {editingInfo ? "Edit Booking" : "Add Booking"}
        </h3>

        <select
          value={selectedClientId}
          onChange={(e) => setSelectedClientId(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select a client</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.firstname} {c.lastname}  {-c.address}
            </option>
          ))}
        </select>

        <div className="flex space-x-2">
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="time"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border p-2 rounded w-1/2"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {editingInfo ? "Update Booking" : "Add Booking"}
        </button>
      </div>
    </div>
  );
};

export default CalendarWidget;
