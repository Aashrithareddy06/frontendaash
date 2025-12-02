export default function Destinations() {
  const places = [
    { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
    { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    { name: "Maldives", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800" },
    { name: "Dubai", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" },
  ];

  return (
    <>
      <div className="dest-container">
        <h1>Popular Destinations</h1>

        <div className="card-grid">
          {places.map((p) => (
            <div className="card" key={p.name}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        
        :root {
          --primary: #007bff;
          --text-dark: #0f1a2b;

          /* 🌈 Choose your background here */
          --page-bg: linear-gradient(to bottom, #cce0ff, #99c2ff); /* Premium Blue */
          
          /* Card gradient */
          --card-bg: linear-gradient(135deg, #d1e3ff, #a8c6ff);
        }

        /* 🌈 Page Background – No White */
        .dest-container {
          width: 100%;
          min-height: 100vh;
          padding: 60px 40px;
          background: var(--page-bg);
        }

        .dest-container h1 {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: 50px;
          font-size: 38px;
          font-weight: 700;
        }

        /* Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 35px;
        }

        /* 🌈 Cards – also no white */
        .card {
          background: var(--card-bg);
          border-radius: 16px;
          overflow: hidden;
          padding-bottom: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          transition: 0.35s ease;
          text-align: center;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.25);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card h3 {
          margin-top: 14px;
          color: var(--text-dark);
          font-size: 20px;
          font-weight: 600;
        }

      `}</style>
    </>
  );
}
