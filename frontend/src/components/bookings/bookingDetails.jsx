import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./bookingDetails.css";

const BookingDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Booking_Report_${booking?.id || "N/A"}`,
  });

  if (!booking) {
    return (
      <div className="booking-details-container">
        <h2 className="error-message">❌ No booking found for ID: {id}</h2>
        <button className="btn back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "status-confirmed";
      case "cancelled":
        return "status-cancelled";
      case "pending":
        return "status-pending";
      default:
        return "status-default";
    }
  };

  return (
    <div className="booking-details-container">
      <h2 className="booking-details-title">📋 Booking Details</h2>
      <div ref={componentRef} className="booking-details-card">
        <p><strong>📌 Booking ID:</strong> #{booking.id}</p>
        <p><strong>👤 Guest Name:</strong> {booking.guestName}</p>
        <p><strong>🏨 Hotel:</strong> {booking.hotelName}</p>
        <p><strong>📅 Check-In:</strong> {formatDate(booking.checkIn)}</p>
        <p><strong>📅 Check-Out:</strong> {formatDate(booking.checkOut)}</p>
        <p>
          <strong>📦 Status:</strong>{" "}
          <span className={`badge ${getStatusClass(booking.status)}`}>
            {booking.status}
          </span>
        </p>
      </div>

      <div className="button-group">
        <button className="btn back-btn" onClick={() => navigate(-1)}>
          ⬅ Back to Bookings
        </button>
        <button onClick={() => navigate("/reports")} className="print-btn">
        Print
      </button>
      </div>
    </div>
  );
};

export default BookingDetails;
