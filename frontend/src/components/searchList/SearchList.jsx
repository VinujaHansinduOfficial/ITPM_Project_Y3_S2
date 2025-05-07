import React, { useState, useEffect } from 'react';
import SearchItem from "../searchItem/SearchItem";
import './App.css';

const hotels = [
  { id: 1, title: "Jetwing Blue", location: "Negombo", image: "1.jpg", freeTaxi: true, description: "Set along Negombo Beach on the Indian Ocean...", features: "Entire studio | 1 bathroom | 21m² | 1 full bed", freeCancellation: true, cancelSubtitle: "You can cancel later.", ratingText: "Excellent", rating: 8.9, price: 112 },
  { id: 2, title: "Cinnamon Grand", location: "Colombo", image: "2.jpg", freeTaxi: false, description: "Luxury 5-star hotel in Colombo...", features: "Deluxe Room | 1 bathroom | 30m² | 1 King bed", freeCancellation: false, cancelSubtitle: "", ratingText: "Superb", rating: 9.2, price: 180 },
  { id: 3, title: "Heritance Kandalama", location: "Dambulla", image: "3.jpg", freeTaxi: true, description: "A unique eco-luxury hotel in the heart of nature...", features: "Suite | 1 bathroom | 40m² | 1 Queen bed", freeCancellation: true, cancelSubtitle: "Cancel anytime before check-in.", ratingText: "Outstanding", rating: 9.5, price: 250 }
];

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const List = () => {
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('price-asc');
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = hotels.filter(hotel => hotel.rating >= minRating && hotel.price <= maxPrice);

      if (sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating-desc') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      setFilteredHotels(filtered);
    };

    const debouncedFilter = debounce(applyFilters, 300);
    debouncedFilter();
  }, [minRating, maxPrice, sortBy]);

  return (
    <div className="hotel-list-container">
      <div className="filters">
        <h2>Filters</h2>
        <div>
          <label>Min Rating:</label>
          <input type="number" value={minRating} onChange={(e) => setMinRating(parseFloat(e.target.value) || 0)} min={0} max={10} step="0.1" placeholder="Enter min rating" />
        </div>
        <div>
          <label>Max Price:</label>
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(parseFloat(e.target.value) || 1000)} min={0} placeholder="Enter max price" />
        </div>
        <div>
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating-desc">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="hotel-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => <SearchItem key={hotel.id} hotel={hotel} />)
        ) : (
          <p>No hotels match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default List;
