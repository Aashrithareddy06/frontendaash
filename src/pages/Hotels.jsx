import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiClient";

export default function Hotels() {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();

  const searchHotels = async () => {
    if (!city) return alert("Enter city!");

    try {
      const response = await api.post("/api/hotels/search", { city });
      const data = response.data;

      if (!data.success) {
        alert("No hotels found!");
        setHotels([]);
        return;
      }

      setHotels(data.hotels);
    } catch (err) {
      console.error("Search hotels error:", err);
      alert("Search failed. Please try again.");
      setHotels([]);
    }
  };

  return (
    <div className="hotel-page">
      <h1 className="title">Find the Best Hotels 🏨</h1>
      <p className="subtitle">Discover top stays at your favourite destinations.</p>

      <div className="search-bar">
        <input placeholder="Enter city…" onChange={(e) => setCity(e.target.value)} />
        <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
        <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
        <button onClick={searchHotels}>Search Hotels</button>
      </div>

      {/* ------- SIMPLE HOTEL LIST ------- */}
      <div className="hotel-list">
        {hotels.map((h) => (
          <div className="hotel-row" key={h.id}>
            <div>
              <h3>{h.name}</h3>
              <p>⭐ {h.rating} | 💰 ₹{h.price} / night</p>
            </div>

            <button
              className="book-btn"
              onClick={() =>
                navigate("/hotel-booking", {
                  state: { hotel: h, city, checkIn, checkOut },
                })
              }
            >
              Book
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .hotel-page {
          background:#003b70;
          min-height:100vh;
          padding:20px;
          color:white;
          text-align:center;
        }

        .title {
          font-size:38px;
          font-weight:700;
        }

        .subtitle {
          margin-bottom:25px;
          opacity:0.8;
        }

        .search-bar {
          display:flex;
          gap:12px;
          justify-content:center;
          margin-bottom:30px;
        }

        .search-bar input, .search-bar button {
          padding:12px;
          border:none;
          border-radius:8px;
        }

        .search-bar button {
          background:#ffdd00;
          font-weight:bold;
          cursor:pointer;
        }

        .hotel-list {
          margin:0 auto;
          width:70%;
          display:flex;
          flex-direction:column;
          gap:15px;
        }

        .hotel-row {
          background:#024a85;
          padding:15px 20px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          transition:0.3s;
        }

        .hotel-row:hover {
          background:#035aa5;
        }

        .hotel-row h3 {
          margin:0;
          font-size:20px;
          font-weight:600;
        }

        .book-btn {
          background:#ffdd00;
          border:none;
          padding:10px 18px;
          border-radius:8px;
          cursor:pointer;
          font-weight:bold;
        }
      `}</style>
    </div>
  );
}
