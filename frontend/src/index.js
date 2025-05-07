import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './pages/hotel/Hotel';
import './pages/list/List';
import './pages/home/Home';
import './pages/auth/Register';
import './pages/auth/Login';
import './App.css';
import './components/navbar/Navbar';
import './components/header/Header';
import './components/featured/Featured';
import './pages/propertyList/PropertyList';
import './components/bookings/bookings';
import './components/featuredProperties/FeaturedProperties';
import './components/testimonialsSection/testimonialsSection';
import './components/subscribeFooterSection/SubscribeFooterSection';
import './components/navbar/navbar.css';
import './components/header/header.css';
import './components/featured/featured.css';
import './pages/propertyList/propertyList.css';
import './components/bookings/bookings.css';
import './components/bookings/bookingDetails';
import './components/bookings/bookingDetails.css';
import './components/featuredProperties/featuredProperties.css';
import './components/testimonialsSection/testimonialsSection.css';
import './components/mailList/MailList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);