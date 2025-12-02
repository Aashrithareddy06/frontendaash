import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const backgrounds = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // NEW IMPROVED SEARCH FUNCTION
  const searchBuses = async () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/buses/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, date })
      });

      const data = await res.json();

      if (!data.success) {
        setResults([]);
        alert(data.message);
        return;
      }

      setResults(data.buses);
    } catch (err) {
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="dash-container">

      {/* HERO SECTION */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      >
        <div className="hero-overlay">
          <h1 className="title">Welcome, {user?.name || "Explorer"} 🌍</h1>
          <p className="subtitle">Book buses, hotels, flights & more.</p>

          {/* BUS SEARCH */}
          <div className="bus-search">
            <input placeholder="From" onChange={(e) => setFrom(e.target.value)} />
            <input placeholder="To" onChange={(e) => setTo(e.target.value)} />
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <button onClick={searchBuses}>Search Buses</button>
          </div>
        </div>
      </div>

      {/* SEARCH RESULTS */}
      {results.length > 0 && (
        <>
          <h2 className="section-title">Available Buses</h2>
          <div className="bus-list">
            {results.map((bus) => (
              <div className="bus-card" key={bus.id}>
                <h3>{bus.bus_name}</h3>
                <p>{bus.source} → {bus.destination}</p>
                <p className="bus-type">{bus.bus_type}</p>

                <div className="bus-info">
                  <span>🕒 {bus.departure_time} → {bus.arrival_time}</span>
                  <span>💺 {bus.seats_available} seats</span>
                  <span>💰 ₹{bus.price}</span>
                </div>

                <button className="book-btn">Book Now</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* QUICK ACTIONS */}
      <h2 className="section-title">Quick Actions</h2>
      <div className="quick-actions">
        <div className="card" onClick={() => navigate("/booking")}>🚌 Bus Booking</div>
        <div className="card" onClick={() => navigate("/hotels")}>🏨 Hotels</div>
        <div className="card" onClick={() => navigate("/flights")}>✈ Flights</div>
        <div className="card" onClick={() => navigate("/rentals")}>🚗 Car Rentals</div>
      </div>

      {/* RECOMMENDED ROUTES */}
      <h2 className="section-title">Recommended Routes</h2>
      <div className="routes-grid">
        {[
          { route: "Hyderabad → Bangalore", time: "10h • Overnight Bus" },
          { route: "Chennai → Bangalore", time: "6h • AC Sleeper" },
          { route: "Mumbai → Pune", time: "3h • Daily Service" },
          { route: "Delhi → Jaipur", time: "5h • Luxury Coaches" },
        ].map((r, i) => (
          <div className="route-card" key={i}>
            <h3>{r.route}</h3>
            <p>{r.time}</p>
          </div>
        ))}
      </div>

      {/* POPULAR OPERATORS */}
      <h2 className="section-title">Popular Bus Operators</h2>
      <div className="operators">
        {["VRL Travels", "Orange Tours", "KPN Travels", "Morning Star", "SRS Travels"].map((op) => (
          <div className="op-card" key={op}>{op}</div>
        ))}
      </div>

      {/* OFFERS */}
      <h2 className="section-title">Latest Offers</h2>
      <div className="offers">
        <div className="offer-card">🔥 Get 10% OFF on First Booking</div>
        <div className="offer-card">💳 Flat ₹150 OFF with HDFC Cards</div>
        <div className="offer-card">🎉 New Year Offer: Save 20%</div>
      </div>

      {/* TRENDING DESTINATIONS */}
      <h2 className="section-title">Trending Destinations</h2>
      <div className="trending-grid">
        {[
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
        ].map((url) => (
          <img src={url} className="trend-img" key={url} />
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <h2 className="section-title">Why Choose TravelX?</h2>
      <div className="why-us">
        <div className="why-card">💺 Comfortable Buses</div>
        <div className="why-card">🛡 100% Safe & Secure</div>
        <div className="why-card">⏱ Easy Booking</div>
        <div className="why-card">📞 24/7 Support</div>
      </div>

      <Styles />
    </div>
  );
}

/* ========================= STYLES ========================= */

function Styles() {
  return (
    <style>
      {`
      .dash-container { background:#001933; color:white; min-height:280vh; font-family:Poppins; }

      .hero-section {
        height:420px; background-size:cover; background-position:center;
        border-bottom-left-radius:40px; border-bottom-right-radius:40px;
      }

      .hero-overlay {
        height:100%; background:linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9));
        display:flex; flex-direction:column; justify-content:center; align-items:center;
      }

      .title { font-size:40px; font-weight:700; margin-bottom:10px; }
      .subtitle { font-size:18px; opacity:0.9; }

      .bus-search { display:flex; gap:10px; margin-top:20px; }
      .bus-search input { padding:12px; border-radius:10px; width:180px; border:none; }
      .bus-search button {
        background:#ffdd00; border:none; padding:12px 20px;
        border-radius:10px; font-weight:bold; cursor:pointer;
      }

      .section-title { font-size:26px; margin:30px 25px 15px; }

      .bus-list { display:flex; flex-wrap:wrap; gap:20px; padding:0 25px; }
      .bus-card {
        background:rgba(255,255,255,0.12); backdrop-filter:blur(8px);
        width:300px; padding:20px; border-radius:15px; transition:0.3s;
      }
      .bus-card:hover { transform:scale(1.05); }

      .bus-type { font-weight:600; margin-bottom:8px; }

      .bus-info { display:flex; flex-direction:column; gap:6px; opacity:0.9; }

      .book-btn {
        background:#ffdd00; color:black; border:none;
        padding:12px 20px; margin-top:12px; border-radius:10px;
        cursor:pointer; font-weight:600; transition:0.3s;
      }

      .book-btn:hover { background:#ffe34b; }

      .quick-actions { display:flex; flex-wrap:wrap; gap:20px; padding:0 25px; }
      .card {
        background:rgba(255,255,255,0.15); padding:18px;
        width:170px; text-align:center; border-radius:14px; cursor:pointer;
      }

      .routes-grid { display:flex; flex-wrap:wrap; gap:20px; padding:0 25px; }
      .route-card {
        background:#022144; padding:18px; width:240px; border-radius:12px;
      }

      .operators { display:flex; gap:20px; padding:0 25px; flex-wrap:wrap; }
      .op-card { background:#003b70; padding:15px 25px; border-radius:12px; }

      .offers { display:flex; gap:20px; padding:0 25px; overflow-x:auto; }
      .offer-card {
        background:#8a2be2; padding:18px 25px; border-radius:12px; min-width:280px;
      }

      .trending-grid { display:flex; gap:20px; padding:0 25px; flex-wrap:wrap; }
      .trend-img {
        width:320px; height:200px; border-radius:14px; object-fit:cover;
      }

      .why-us { display:flex; gap:20px; padding:0 25px; flex-wrap:wrap; }
      .why-card {
        background:rgba(255,255,255,0.1); padding:18px; border-radius:14px; width:220px;
      }
      `}
    </style>
  );
}
