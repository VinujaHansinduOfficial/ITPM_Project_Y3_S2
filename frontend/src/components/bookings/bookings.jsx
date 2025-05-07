import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookings.css";

const mockBookings = [
  {
    id: 1,
    guestName: "John Doe",
    hotelName: "Ocean View Hotel",
    checkIn: "2025-05-10",
    checkOut: "2025-05-15",
    status: "Confirmed",
  },
  {
    id: 2,
    guestName: "Jane Smith",
    hotelName: "Green Garden Resort",
    checkIn: "2025-06-01",
    checkOut: "2025-06-05",
    status: "Cancelled",
  },
  {
    id: 3,
    guestName: "Alice Cooper",
    hotelName: "Sunrise Beach Inn",
    checkIn: "2025-07-20",
    checkOut: "2025-07-25",
    status: "Pending",
  },
];

const Bookings = () => {
  const [search, setSearch] = useState("");
  const [bookings, setBookings] = useState(mockBookings);
  const navigate = useNavigate();

  const handleCancel = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "Cancelled" } : b
      )
    );
  };

  const filteredBookings = bookings.filter((b) =>
    [b.guestName, b.hotelName, b.checkIn, b.checkOut]
      .some(field => field.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusClass = (status) => {
    return `booking-status ${status.toLowerCase()}`;
  };

  return (
    <div className="bookings-container">
      <h2 className="bookings-title">📒 Booking Details</h2>

      <div className="bookings-search">
        <input
          type="text"
          placeholder="🔍 Search by guest, hotel, or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredBookings.length === 0 ? (
        <div className="bookings-empty">
          <div role="img" aria-label="no bookings" className="emoji">📭</div>
          <p>No bookings found.</p>
        </div>
      ) : (
        <div className="bookings-table-wrapper">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Guest</th>
                <th>Hotel</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.guestName}</td>
                  <td>{booking.hotelName}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td>
                    <span className={getStatusClass(booking.status)}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="booking-action view"
                      onClick={() =>
                        navigate(`/bookings/${booking.id}`, { state: { booking } })
                      }
                    >
                      View
                    </button>
                    <button
                      className="booking-action cancel"
                      onClick={() => handleCancel(booking.id)}
                      disabled={booking.status === "Cancelled"}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bookings;
