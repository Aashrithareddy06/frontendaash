import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Rentals from "./pages/Rentals";
import CarBooking from "./pages/CarBooking";
import BookingSuccess from "./pages/BookingSuccess";
import FlightSuccess from "./pages/FlightSuccess";
import HotelBooking from "./pages/HotelBooking";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/car-booking" element={<CarBooking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/flight-success" element={<FlightSuccess />} />

      </Routes>

      <footer className="footer">
        <p>© 2025 TravelX • Explore the World With Us</p>
      </footer>

      <style>{`
        .footer {
          background: #003f9e;
          color: white;
          text-align: center;
          padding: 18px;
          margin-top: 40px;
          font-size: 16px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
