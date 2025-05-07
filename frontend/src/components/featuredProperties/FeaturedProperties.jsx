import React from "react";
import "./featuredProperties.css";

// Import images properly
import hotel1 from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";
import hotel4 from "../../assets/images/hotel4.jpg";

const featuredHotels = [
  {
    id: 1,
    name: "Sentido Heritance Negombo",
    city: "Negombo",
    price: 120,
    rating: 8.9,
    ratingText: "Excellent",
    image: hotel1,
  },
  {
    id: 2,
    name: "Pledge Scape Negombo",
    city: "Negombo",
    price: 140,
    rating: 9.3,
    ratingText: "Exceptional",
    image: hotel2,
  },
  {
    id: 3,
    name: "Hilton Hotel",
    city: "Colombo 00700",
    price: 99,
    rating: 8.6,
    ratingText: "Excellent",
    image: hotel3,
  },
  {
    id: 4,
    name: "Grand Landyan Hotel",
    city: "Kandy",
    price: 105,
    rating: 8.9,
    ratingText: "Excellent",
    image: hotel4,
  },
];

const FeaturedProperties = () => {
  return (
    <section className="fp" aria-labelledby="fp-title">
      <h2 id="fp-title" className="fpTitle">Featured Hotels</h2>
      <div className="fpGrid">
        {featuredHotels.map((hotel) => (
          <article className="fpItem" key={hotel.id}>
            <img src={hotel.image} alt={`View of ${hotel.name}`} className="fpImg" />
            <div className="fpInfo">
              <h3 className="fpName">{hotel.name}</h3>
              <p className="fpCity">{hotel.city}</p>
              <p className="fpPrice">From ${hotel.price} / night</p>
              <div className="fpRating">
                <button>{hotel.rating}</button>
                <span>{hotel.ratingText}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
