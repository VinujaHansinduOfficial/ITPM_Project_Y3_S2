import React, { useState } from "react";
import "./destinations.css";
import hotel1 from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";
import hotel4 from "../../assets/images/hotel4.jpg";

const destinationsData = [
  {
    name: "Arugam Bay",
    image: hotel1,
    description: "A surfer's paradise on Sri Lanka's east coast with scenic beaches and laid-back vibes perfect for a tropical getaway.",
    rating: 4.8,
    category: "Beach",
    location: "Eastern Province",
    tips: "Best visited between May and September. Great for surfing and yoga retreats."
  },
  {
    name: "Ella",
    image: hotel2,
    description: "A peaceful mountain town famous for hiking, lush greenery, and the iconic Nine Arches Bridge.",
    rating: 4.7,
    category: "Nature",
    location: "Uva Province",
    tips: "Don't miss the Ella Rock and a train ride from Kandy to Ella."
  },
  {
    name: "Hikkaduwa",
    image: hotel3,
    description: "A vibrant coastal town known for coral reefs, beach parties, and its rich marine life.",
    rating: 4.9,
    category: "Beach",
    location: "Southern Province",
    tips: "Ideal for snorkeling, scuba diving, and beachside dining."
  },
  {
    name: "Negombo",
    image: hotel4,
    description: "A seaside city with golden beaches, a scenic lagoon, and colonial-era churches.",
    rating: 4.6,
    category: "Coastal",
    location: "Western Province",
    tips: "Try the fresh seafood at the local markets and explore the Dutch Fort."
  },

  
];

const truncate = (str, length) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortByRating, setSortByRating] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortToggle = () => {
    setSortByRating(!sortByRating);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortByRating(false);
  };

  const filteredDestinations = destinationsData
    .filter((dest) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || dest.category === selectedCategory)
    )
    .sort((a, b) => (sortByRating ? b.rating - a.rating : 0));

  return (
    <main className="destinations">
      <section className="destinationsSection" aria-labelledby="destinations-title">
        <header className="destinationsHeader">
          <h1 id="destinations-title" className="destinationsTitle">Popular Destinations</h1>
          <p className="destinationsSubtitle">Discover top-rated places around Sri Lanka</p>

          <div className="filters">
            <input
              type="text"
              className="searchBar"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search destinations"
            />

            <select
              className="categoryFilter"
              value={selectedCategory}
              onChange={handleCategoryChange}
              aria-label="Filter by category"
            >
              <option value="All">All Categories</option>
              <option value="Beach">Beach</option>
              <option value="Nature">Nature</option>
              <option value="Coastal">Coastal</option>
              <option value="Adventure">Adventure</option>
              
              <option value="Cultural">Cultural</option>
              <option value="Historical">Historical</option>
              <option value="Wildlife">Wildlife</option>
              <option value="City">City</option>
              <option value="Countryside">Countryside</option>
              
            </select>

            <button className="sortBtn" onClick={handleSortToggle}>
              {sortByRating ? "Unsort" : "Sort by Rating"}
            </button>

            <button className="resetBtn" onClick={handleReset}>
              Reset Filters
            </button>
          </div>
        </header>

        <div className="destinationsGrid">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, index) => (
              <article key={index} className="destinationCard">
                <img
                  src={dest.image}
                  alt={`Scenic view of ${dest.name}`}
                  loading="lazy"
                  className="destinationImg"
                />
                <div className="destinationContent">
                  <h2 className="destinationName">{dest.name}</h2>
                  <p className="destinationDescription">{truncate(dest.description, 100)}</p>
                  <p className="destinationLocation">📍 {dest.location}</p>
                  <p className="destinationTips">💡 {dest.tips}</p>
                  <div className="destinationMeta">
                    <span className="destinationCategory">🏷️ {dest.category}</span>
                    <span className="destinationRating">⭐ {dest.rating.toFixed(1)}</span>
                    <span className="destinationReviews">📝 {dest.reviews} Reviews</span>

                    
                  </div>
                  <button
                    className="viewMoreBtn"
                    onClick={() => console.log(`Viewing more details for ${dest.name}`)}
                    aria-label={`View more details about ${dest.name}`}
                  >
                    View More Details
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="noResults">No destinations found.</p>
          )}
        </div>

        <footer className="destinationsFooter">
          <p>Explore the beauty of Sri Lanka with us!</p>
          <button className="exploreAllBtn" aria-label="Explore all destinations">
            Explore All Destinations
          </button>
        </footer>
      </section>
    </main>
  );
};

export default Destinations;
