import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleBooking = async () => {
    if (!destination || !date) {
      alert("Please fill all fields");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user ? user.id : 0;

    const res = await fetch("http://localhost:5000/api/bookings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, destination, date }),
    });

    const data = await res.json();

    if (data.success) {
      navigate("/booking-success", {
        state: { destination, date },
      });
    } else {
      alert("Booking failed!");
    }
  };

  return (
    <>
      <div className="booking-container">

        {/* BACKGROUND SLIDESHOW */}
        <div className="booking-slideshow">
          <div className="slide s1"></div>
          <div className="slide s2"></div>
          <div className="slide s3"></div>
        </div>

        {/* BOOKING FORM */}
        <h1 className="booking-title">Book Your Trip</h1>

        <div className="booking-form">
          <input
            type="text"
            placeholder="Destination"
            className="b-input"
            onChange={(e) => setDestination(e.target.value)}
          />

          <input
            type="date"
            className="b-input"
            onChange={(e) => setDate(e.target.value)}
          />

          <button className="b-btn" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </div>

      <style>{`
        /* MAIN PAGE */
        .booking-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 140px;
          position: relative;
          z-index: 2;
          color: white;
          text-shadow: 0 2px 6px rgba(0,0,0,0.9);
        }

        /* BACKGROUND SLIDESHOW */
        .booking-slideshow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          animation: fadeSlide 18s infinite;
          opacity: 0;A
        }

        /* 3 rotating travel images */
        .s1 { background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600"); animation-delay: 0s; }
        .s2 { background-image: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600"); animation-delay: 6s; }
        .s3 { background-image: url("https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1600"); animation-delay: 12s; }

        @keyframes fadeSlide {
          0% { opacity: 0; }
          10% { opacity: 1; }
          30% { opacity: 1; }
          40% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* TITLE */
        .booking-title {
          font-size: 45px;
          margin-bottom: 35px;
          font-weight: 700;
        }

        /* FORM INPUTS DIRECTLY ON TOP OF IMAGE */
        .booking-form {
          width: 420px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .b-input {
          padding: 15px;
          font-size: 18px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255,255,255,0.85);
          color: #000;
        }

        .b-btn {
          padding: 15px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: #ffb100;
          font-size: 20px;
          font-weight: 700;
          color: black;
          transition: 0.3s;
        }

        .b-btn:hover {
          background: #ffc738;
          transform: translateY(-3px);
        }

      `}</style>
    </>
  );
}
