import React from "react";
import "./hotelOwners.css";

// Corrected import paths for images
import hotel1 from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";

const HotelOwners = () => {
  const hotels = [
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "New York, USA",
      description: "A luxurious hotel offering world-class amenities and services.",
      image: hotel1,
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Maldives",
      description: "A serene beachfront resort with stunning ocean views.",
      image: hotel2,
    },
    {
      id: 3,
      name: "Mountain Escape Lodge",
      location: "Swiss Alps",
      description: "A cozy lodge nestled in the heart of the mountains.",
      image: hotel3,
    },
  ];

  return (
    <div className="hotelOwnersContainer">
      <h1>Hotel Owners</h1>
      <div className="hotelsList">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotelCard">
            <img src={hotel.image} alt={hotel.name} className="hotelImage" />
            <h2>{hotel.name}</h2>
            <p><strong>Location:</strong> {hotel.location}</p>
            <p>{hotel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelOwners;