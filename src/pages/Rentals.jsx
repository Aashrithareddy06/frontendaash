import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarRentals() {
  const [city, setCity] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  const searchCars = () => {
    if (!city) return alert("Enter a city!");

    const dummyCars = [
      {
        id: 1,
        name: "Toyota Innova",
        type: "SUV",
        seats: 7,
        price: "2499",
      },
      {
        id: 2,
        name: "Hyundai i20",
        type: "Hatchback",
        seats: 5,
        price: "1299",
      },
      {
        id: 3,
        name: "Maruti Swift Dzire",
        type: "Sedan",
        seats: 5,
        price: "1499",
      },
    ];

    setCars(dummyCars);
  };

  const goToBooking = (car) => {
    navigate("/car-booking", {
      state: {
        car,
        city,
        pickupDate,
        dropDate,
      },
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <h1 style={styles.title}>Car Rentals 🚗</h1>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={styles.input}
          />

          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            style={styles.input}
          />

          <input
            type="date"
            value={dropDate}
            onChange={(e) => setDropDate(e.target.value)}
            style={styles.input}
          />

          <button onClick={searchCars} style={styles.button}>
            Search Cars
          </button>
        </div>

        <div style={styles.list}>
          {cars.length > 0 ? (
            cars.map((car) => (
              <div
                key={car.id}
                style={styles.card}
                onClick={() => goToBooking(car)}
              >
                <h3 style={styles.carName}>{car.name}</h3>
                <p style={styles.text}>
                  {car.type} • Seats: {car.seats}
                </p>
                <p style={styles.price}>₹{car.price} / day</p>
              </div>
            ))
          ) : (
            <p style={styles.noCars}>Search to see available cars</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
    overflowY: "auto",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.4)",
  },

  content: {
    position: "relative",
    padding: "40px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  searchBox: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    padding: "20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    borderRadius: "12px",
    maxWidth: "900px",
  },

  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    width: "180px",
    background: "rgba(255,255,255,0.85)",
  },

  button: {
    padding: "12px 20px",
    borderRadius: "8px",
    background: "#ff9800",
    color: "white",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "600",
  },

  list: {
    marginTop: "30px",
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    maxWidth: "450px",
    cursor: "pointer",
    transition: "0.2s",
  },

  carName: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600",
    color: "#ffeb3b",
  },

  text: {
    margin: "5px 0",
    fontSize: "18px",
  },

  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#4caf50",
  },

  noCars: {
    fontSize: "20px",
    color: "white",
    marginTop: "20px",
  },
};
