import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Flights() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState([]);

  const navigate = useNavigate();

  const searchFlights = () => {
    if (!from || !to) {
      return alert("Enter From & To cities!");
    }

    const dummyFlights = [
      {
        id: 1,
        airline: "Indigo",
        from,
        to,
        time: "08:30 AM",
        price: "₹4,299",
      },
      {
        id: 2,
        airline: "Air India",
        from,
        to,
        time: "02:10 PM",
        price: "₹5,999",
      },
      {
        id: 3,
        airline: "Vistara",
        from,
        to,
        time: "07:45 PM",
        price: "₹6,450",
      },
    ];

    setFlights(dummyFlights);
  };

  // 🔥 UPDATED: Book flight & send to backend
  const handleBook = async (airline, price) => {
    try {
      const res = await fetch("http://localhost:5000/api/flights/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          airline,
          from,
          to,
          date,
          price,
        }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/flight-success", { state: { airline } });
      } else {
        alert("Booking failed!");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay} />

      <div style={styles.content}>
        <h1 style={styles.title}>Find Flights ✈️</h1>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="From City"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="To City"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={styles.input}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />

          <button onClick={searchFlights} style={styles.button}>
            Search Flights
          </button>
        </div>

        <div style={styles.list}>
          {flights.length > 0 ? (
            flights.map((f) => (
              <div key={f.id} style={styles.card}>
                <h3 style={styles.airline}>{f.airline}</h3>
                <p style={styles.text}>
                  {f.from} → {f.to}
                </p>
                <p style={styles.text}>Time: {f.time}</p>
                <p style={styles.price}>{f.price}</p>

                {/* 🔥 UPDATED BUTTON */}
                <button
                  style={styles.bookButton}
                  onClick={() => handleBook(f.airline, f.price)}
                >
                  Book Now
                </button>
              </div>
            ))
          ) : (
            <p style={styles.noFlights}>Search flights to see results</p>
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
      "url('https://media.istockphoto.com/id/155380716/photo/commercial-jet-flying-over-clouds.jpg?s=612x612&w=0&k=20&c=idhnJ7ZdrLA1Dv5GO2R28A8WCx1SXCFVLu5_2cfdvXw=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
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
    marginBottom: "20px",
  },

  searchBox: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    padding: "20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    borderRadius: "15px",
    maxWidth: "900px",
  },

  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    width: "180px",
    background: "rgba(255,255,255,0.8)",
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
    marginTop: "25px",
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    maxWidth: "450px",
  },

  airline: {
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

  noFlights: {
    marginTop: "20px",
    fontSize: "20px",
    color: "#fff",
  },

  bookButton: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#4caf50",
    border: "none",
    color: "white",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
