import React from 'react';
import { useLocation } from 'react-router-dom';
import './bookingpage.css';  // Import your CSS file for styling

const BookingPage = () => {
  const location = useLocation();
  const { hotel } = location.state || {};  // Retrieve the passed hotel data

  if (!hotel) {
    return <p>No hotel selected!</p>;  // In case no hotel is passed (for safety)
  }

  return (
    <div className="booking-container">
      <h2>Booking Information</h2>
      <div className="booking-details">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <p className="hotel-price">{hotel.price}</p>
        
        <div className="booking-form">
          <h4>Complete Your Booking</h4>
          {/* Add a form here to collect user details */}
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="date" placeholder="Check-in Date" />
            <input type="date" placeholder="Check-out Date" />
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
