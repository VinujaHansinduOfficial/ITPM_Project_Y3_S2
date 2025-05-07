import React from "react";
import "./testimonialsSection.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    rating: 5,
    photo: "john.jpg",
    testimonial: "Amazing experience! The hotel was fantastic, with great service and beautiful views. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Smith",
    location: "London, UK",
    rating: 4,
    photo: "sarah.jpg",
    testimonial: "The location was perfect for exploring the city. The staff was friendly and the amenities were top-notch.",
  },
  {
    id: 3,
    name: "Raj Patel",
    location: "Mumbai, India",
    rating: 5,
    photo: "raj.jpg",
    testimonial: "A wonderful stay with excellent hospitality. Would definitely return next year!",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonialsSection">
      <h2>What Our Customers Say</h2>
      <div className="testimonialList">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonialCard">
            <img src={testimonial.photo} alt={testimonial.name} className="testimonialPhoto" />
            <div className="testimonialContent">
              <p className="testimonialText">"{testimonial.testimonial}"</p>
              <div className="testimonialDetails">
                <h3 className="testimonialName">{testimonial.name}</h3>
                <span className="testimonialLocation">{testimonial.location}</span>
                <div className="testimonialRating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < testimonial.rating ? "filled" : ""}`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;