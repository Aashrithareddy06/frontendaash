import { useLocation } from "react-router-dom";
import { useState } from "react";
import api from "../api/apiClient";

export default function HotelBooking() {
  const { state } = useLocation();
  const [success, setSuccess] = useState(false);

  if (!state) {
    return <h2 style={{ padding: "20px" }}>No booking details found.</h2>;
  }

  const { hotel, city, checkIn, checkOut } = state;

  const handleConfirmBooking = async () => {
    const user_id = localStorage.getItem("user_id");

    try {
      const response = await api.post("/api/hotelBooking/book", {
        user_id,
        hotel_id: hotel.id,
        city,
        checkIn,
        checkOut,
        price: hotel.price,
      });

      const data = response.data;

      if (data.success) {
        setSuccess(true);
      } else {
        alert("Booking failed!");
      }
    } catch (err) {
      console.error("Hotel booking error:", err);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      {success ? (
        <div>
          <h1>🎉 Thanks For Booking!</h1>
          <p>Your hotel has been booked successfully.</p>

          <h3>Booking Details</h3>
          <p><b>Hotel:</b> {hotel.name}</p>
          <p><b>City:</b> {city}</p>
          <p><b>Check-In:</b> {checkIn}</p>
          <p><b>Check-Out:</b> {checkOut}</p>
          <p><b>Price:</b> ₹{hotel.price} / night</p>
        </div>
      ) : (
        <div>
          <h1>{hotel.name}</h1>
          <p>⭐ {hotel.rating}</p>
          <p>City: {city}</p>
          <p>Check-In: {checkIn}</p>
          <p>Check-Out: {checkOut}</p>
          <p>Price: ₹{hotel.price}</p>

          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "gold",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0157a3, #0388ff)",
    padding: "40px",
  },
  card: {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    width: "420px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#007bff",
  },
  text: {
    fontSize: "18px",
    margin: "8px 0",
    color: "#444",
  },
  price: {
    fontSize: "24px",
    color: "green",
    marginTop: "15px",
    fontWeight: "bold",
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    width: "100%",
    background: "#ff9800",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  },
  successBox: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "420px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },
  successTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#28a745",
  },
  successMsg: {
    fontSize: "18px",
    margin: "8px 0",
    color: "#555",
  },
};
