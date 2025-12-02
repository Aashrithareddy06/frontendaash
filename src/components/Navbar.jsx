import { NavLink } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="nav">
        <h2 className="logo">TravelX</h2>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/destinations">Destinations</NavLink></li>
          <li><NavLink to="/booking">Booking</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>

          {user ? (
            <>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signup">Signup</NavLink></li>
            </>
          )}
        </ul>
      </nav>

      <style>{`
        .nav {
          width: 100%;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(90deg, #0061ff, #0033cc);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .logo {
          color: #fff;
          font-size: 28px;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          list-style: none;
          margin: 0;
        }

        .nav-links a {
          color: white;
          font-size: 18px;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          transition: 0.3s;
        }

        .nav-links a:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .nav-links .active {
          background: #ffcc00;
          color: #000 !important;
          font-weight: bold;
        }

        .logout-btn {
          background: #ff3b3b;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: 0.3s;
        }

        .logout-btn:hover {
          background: #ff5555;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            padding: 15px;
            gap: 10px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
}
