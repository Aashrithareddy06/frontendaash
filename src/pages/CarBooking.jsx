import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

export default function CarBooking() {
  const { state } = useLocation();
  const [success, setSuccess] = useState(false);

  if (!state) {
    return <h2 style={{ padding: "20px" }}>No booking details found.</h2>;
  }

  const { car, city, pickupDate, dropDate } = state;

  const handleConfirmBooking = async () => {
    const user_id = localStorage.getItem("user_id");
const res = await fetch("http://localhost:5000/api/carBooking/rent", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    user_id,
    car_id: car.id,
    city,
    pickup_date: pickupDate,
    drop_date: dropDate,
    price: car.price,
  }),
});

const data = await res.json();
console.log("SERVER JSON:", data);

if (data.success) {
  setSuccess(true);
}

  };

  return (
    <div style={styles.page}>
      
      {success ? (
        // SUCCESS BOX UI
        <div style={styles.successBox}>
          <h1 style={styles.successTitle}>🎉 Thanks for Booking!</h1>
          <p style={styles.successMsg}>Your car booking was successful.</p>
          <p style={styles.successMsg}>You can check your email for more details.</p>

          <Link to="/" style={styles.homeButton}>
            Go to Home
          </Link>
        </div>
      ) : (
        // BOOKING CARD
        <div style={styles.card}>
          <h1 style={styles.heading}>{car.name}</h1>

          <p style={styles.text}>{car.type} • {car.seats} Seats</p>
          <p style={styles.text}><b>City:</b> {city}</p>
          <p style={styles.text}><b>Pickup Date:</b> {pickupDate}</p>
          <p style={styles.text}><b>Drop Date:</b> {dropDate}</p>

          <p style={styles.price}>₹{car.price} / day</p>

          <button style={styles.button} onClick={handleConfirmBooking}>
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
    background: "linear-gradient(135deg, #007bff, #00d4ff)",
    padding: "40px",
  },

  card: {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    width: "420px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.8s ease-in-out",
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

  // SUCCESS PAGE UI
  successBox: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "420px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    animation: "fadeIn 0.8s ease-in-out",
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

  homeButton: {
    marginTop: "20px",
    display: "inline-block",
    padding: "12px 20px",
    background: "#007bff",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
