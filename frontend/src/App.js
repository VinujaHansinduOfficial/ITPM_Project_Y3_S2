import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Destinations from "./pages/destinations/Destinations";
import HotelOwners from "./pages/hotelOwners/HotelOwners";
import PropertyList from "./pages/propertyList/PropertyList";
import Reports from "./pages/reports/Reports";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Bookings from "./components/bookings/bookings";
import BookingDetails from "./components/bookings/bookingDetails";
import MailList  from "./components/mailList/MailList"; 
import BookingPage from "./pages/list/bookingpage";


// Styles
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Header />

          <main className="main-content">
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/hotels" element={<List />} />
              <Route path="/hotels/:id" element={<Hotel />} />
              <Route path="/hotel-owners" element={<HotelOwners />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/bookings/:id" element={<BookingDetails />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/property-list" element={<PropertyList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <MailList />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
