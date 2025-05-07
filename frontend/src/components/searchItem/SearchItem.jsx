import React, { useState } from "react";
import PropTypes from "prop-types";
import "./searchItem.css";

const SearchItemAlt = ({ property }) => {
  const {
    image,
    name,
    location,
    description,
    features,
    rating,
    ratingText,
    price,
    cancellation,
    cancellationSubtitle,
    taxi,
  } = property;

  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => setShowMore((prev) => !prev);

  return (
    <div className="siCardAlt">
      <div className="siImageAltWrapper">
        <img
          src={image || "./assets/images/hotel1.jpg"} // Use the passed `image` or fallback image
          alt={name ? `${name} hotel image` : "Hotel image"} // Fallback alt text
          className="siImageAlt"
          loading="lazy" // Lazy loading to improve performance
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "./assets/images/hotel1.jpg"; // Fallback image in case of an error
          }}
        />
      </div>

      <div className="siContentAlt">
        <div className="siHeaderAlt">
          <h4 className="siHotelNameAlt">{name || "Unnamed Hotel"}</h4>
          <p className="siHotelLocationAlt">{location || "Unknown location"}</p>
        </div>

        <div className="siInfoAlt">
          <p className="siFeaturesAlt">{features}</p>
          {taxi && <span className="siTaxiFeatureAlt">🚖 Free Airport Taxi</span>}
        </div>

        {description && (
          <div className="siDescriptionWrapperAlt">
            <p className="siDescriptionAlt">
              {showMore ? description : `${description.slice(0, 100)}...`}
            </p>
            <button
              className="siToggleDescriptionAlt"
              onClick={toggleDescription}
            >
              {showMore ? "Show Less ▲" : "Show More ▼"}
            </button>
          </div>
        )}

        {cancellation && (
          <p className="siCancellationAlt">
            ✅ Free Cancellation
            {cancellationSubtitle && <span> – {cancellationSubtitle}</span>}
          </p>
        )}
      </div>

      <div className="siFooterAlt">
        <div className="siRatingAlt">
          {ratingText && <span className="siRatingTextAlt">{ratingText}</span>}
          {rating && <span className="siRatingValueAlt">{rating}</span>}
        </div>

        <div className="siPriceAltSection">
          <h5 className="siPriceAlt">${price?.toFixed(2) || "0.00"}</h5>
          <p className="siPerNightAlt">/ night</p>
          <button
            className="siBookingButtonAlt"
            onClick={() => console.log(`Booking hotel: ${name}`)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

SearchItemAlt.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    features: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ratingText: PropTypes.string,
    price: PropTypes.number.isRequired,
    cancellation: PropTypes.bool,
    cancellationSubtitle: PropTypes.string,
    taxi: PropTypes.bool,
  }).isRequired,
};

export default SearchItemAlt;
