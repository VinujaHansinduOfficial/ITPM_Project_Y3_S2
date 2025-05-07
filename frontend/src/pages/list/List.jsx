import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';
import hotel1 from '../../assets/images/hotel1.jpg';
import hotel2 from '../../assets/images/hotel2.jpg';
import hotel3 from '../../assets/images/hotel3.jpg';
import hotel4 from '../../assets/images/hotel4.jpg';
import hotel5 from '../../assets/images/hotel5.jpg';
import hotel6 from '../../assets/images/hotel6.jpeg';
import hotel7 from '../../assets/images/hotel7.jpg';
import hotel8 from '../../assets/images/hotel8.jpeg';
import hotel9 from '../../assets/images/hotel9.jpg';
import hotel10 from '../../assets/images/hotel10.jpg';
import hotel11 from '../../assets/images/hotel11.jpg';
import hotel12 from '../../assets/images/hotel12.jpg';
import hotel13 from '../../assets/images/hotel13.jpg';
import hotel14 from '../../assets/images/hotel14.jpeg';
import hotel15 from '../../assets/images/hotel15.jpg';
import hotel16 from '../../assets/images/hotel16.jpg';
import hotel17 from '../../assets/images/hotel17.jpg';


const List = () => {
  const hotels = [
    {
      id: 1,
      name: 'Ocean Paradise Resort',
      description: 'Enjoy breathtaking sea views and luxury comfort just steps from the beach.',
      price: '$150/night',
      image: hotel1,
    },
    {
      id: 2,
      name: 'Mountain Escape Lodge',
      description: 'A peaceful getaway surrounded by nature and fresh mountain air.',
      price: '$110/night',
      image: hotel2,
    },
    {
      id: 3,
      name: 'Urban Comfort Hotel',
      description: 'Located in the city center, this hotel offers modern rooms and premium services.',
      price: '$130/night',
      image: hotel3,
    },
    {
      id: 4,
      name: 'Serenity Lake Villa',
      description: 'Lakeside tranquility with private villas, ideal for romantic escapes.',
      price: '$170/night',
      image: hotel4,
    },
    {
      id: 5,
      name: 'Desert Mirage Camp',
      description: 'Experience the golden sands with comfort in our luxury desert tents.',
      price: '$140/night',
      image: hotel5,
    },
    {
      id: 6,
      name: 'Snowy Peaks Inn',
      description: 'Perfect for winter sports lovers, with views of snow-covered mountains.',
      price: '$160/night',
      image: hotel6,
    },
    {
      id: 7,
      name: 'Rainforest Retreat',
      description: 'Immerse yourself in the sounds of the jungle and eco-luxury lodging.',
      price: '$145/night',
      image: hotel7,
    },
    {
      id: 8,
      name: 'Island Breeze Resort',
      description: 'Private island living with all-inclusive amenities and tropical vibes.',
      price: '$180/night',
      image: hotel8,
    },
    {
      id: 9,
      name: 'Countryside Charm Inn',
      description: 'Cozy and quiet, ideal for a weekend away from city life.',
      price: '$95/night',
      image: hotel10,
    },
    {
      id: 10,
      name: 'Skyline Tower Suites',
      description: 'Penthouse suites in the heart of the business district.',
      price: '$200/night',
      image: hotel9,
    },
    {
      id: 11,
      name: 'Cultural Heritage Hotel',
      description: 'Experience the local culture with traditional architecture and cuisine.',
      price: '$120/night',
      image: hotel11,
    },
    {
      id: 12,
      name: 'Luxury Spa Retreat',
      description: 'Relax and rejuvenate with our full-service spa and wellness programs.',
      price: '$190/night',
      image: hotel12,
    },
    {
      id: 13,
      name: 'Adventure Base Camp',
      description: 'Perfect for thrill-seekers, with activities like rock climbing and zip-lining.',
      price: '$130/night',
      image: hotel13,
    },
    {
      id: 14,
      name: 'Gourmet Food Hotel',
      description: 'A culinary journey with top chefs and exquisite dining experiences.',
      price: '$210/night',
      image: hotel14,
    },
    {
      id: 15,
      name: 'Artistic Haven Hotel',
      description: 'Immerse yourself in art and culture with local artists and exhibitions.',
      price: '$175/night',
      image: hotel15,
    },
    {
      id: 16,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel16,
    },

    {
      id: 17,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel1,
    },
    {
      id: 18,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel2,
    },
    {
      id: 19,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel3,
    },
    {
      id: 20,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel4,
    },
    {
      id: 21,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel5,
    },
    {
      id: 22,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel6,
    },
    {
      id: 23,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel7,
    },
    {
      id: 24,
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable living with eco-friendly practices and organic meals.',
      price: '$125/night',
      image: hotel17,
    },



  ];

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(filter.toLowerCase()) ||
    hotel.price.includes(filter)
  );

  const handleBookNow = () => {
    navigate('/book');
  };

  return (
    <div className="list-container">
      <h2>Available Hotels</h2>
      <input
        type="text"
        placeholder="Filter by name or price"
        className="hotel-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="hotel-grid">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => setSelectedHotel(hotel)}
            className={`hotel-card ${selectedHotel?.id === hotel.id ? 'selected' : ''}`}
          >
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p className="hotel-price">{hotel.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="modal-overlay" onClick={() => setSelectedHotel(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              className="modal-image"
            />
            <h2>{selectedHotel.name}</h2>
            <p>{selectedHotel.description}</p>
            <p className="hotel-price">{selectedHotel.price}</p>
            <button className="book-button" onClick={handleBookNow}>
              Book Now
            </button>
            <button className="close-button" onClick={() => setSelectedHotel(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
