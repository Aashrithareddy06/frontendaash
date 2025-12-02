export default function Home() {
  return (
    <>
      <div className="home-container">

        {/* BACKGROUND SLIDESHOW */}
        <div className="slideshow">
          <div className="slide s1"></div>
          <div className="slide s2"></div>
          <div className="slide s3"></div>
        </div>

        {/* HERO SECTION */}
        <section className="hero">
          <h1>Explore The World With TravelX</h1>
          <p>Your dream destinations are just one click away.</p>
          <a href="/destinations" className="hero-btn">Explore Destinations</a>
        </section>

        {/* FEATURED DESTINATIONS */}
        <section className="featured">
          <h2>Top Picks For You</h2>

          <div className="featured-grid">
            <div className="feat-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800" />
              <h3>Maldives</h3>
            </div>

            <div className="feat-card">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" />
              <h3>Bali</h3>
            </div>

            <div className="feat-card">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" />
              <h3>Paris</h3>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why">
          <h2>Why Choose TravelX?</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>🌍 Huge Destination Choices</h3>
              <p>We take you anywhere across the globe with premium packages.</p>
            </div>

            <div className="why-card">
              <h3>💰 Best Price Guarantee</h3>
              <p>Affordable and flexible travel offers for everyone.</p>
            </div>

            <div className="why-card">
              <h3>⭐ Trusted by Millions</h3>
              <p>We have over 2M+ happy travelers worldwide.</p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        /* SLIDESHOW BACKGROUND */
        .slideshow {
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
          animation: fade 18s infinite;
          opacity: 0;
        }

        .s1 { background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600'); animation-delay: 0s; }
        .s2 { background-image: url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600'); animation-delay: 6s; }
        .s3 { background-image: url('https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=1600'); animation-delay: 12s; }

        @keyframes fade {
          0% { opacity: 0; }
          10% { opacity: 1; }
          30% { opacity: 1; }
          40% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* OVERLAY HOME CONTENT */
        .home-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding-bottom: 60px;
          backdrop-filter: brightness(0.8);
        }

        /* HERO SECTION */
        .hero {
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          text-shadow: 0 2px 5px rgba(0,0,0,0.7);
        }

        .hero h1 {
          font-size: 55px;
          font-weight: 700;
        }

        .hero p {
          font-size: 22px;
          margin: 20px 0;
        }

        .hero-btn {
          background: linear-gradient(135deg, #ffd68a, #ffb100);
          padding: 14px 30px;
          border-radius: 10px;
          font-size: 20px;
          font-weight: bold;
          color: black;
          text-decoration: none;
          transition: 0.3s;
        }

        .hero-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 8px 22px rgba(0,0,0,0.3);
        }

        /* FEATURED */
        .featured {
          text-align: center;
          margin-top: 40px;
          color: white;
        }

        .featured h2 {
          font-size: 32px;
          margin-bottom: 20px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.7);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          padding: 0 40px;
        }

        .feat-card {
          background: rgba(255,255,255,0.25);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(6px);
          color: white;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
          transition: 0.3s;
        }

        .feat-card:hover {
          transform: translateY(-10px);
        }

        /* WHY CHOOSE US */
        .why {
          margin-top: 60px;
          padding: 0 40px;
          color: white;
        }

        .why h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 25px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.7);
        }

        .why-card {
          background: rgba(255,255,255,0.25);
          padding: 25px;
          border-radius: 16px;
          backdrop-filter: blur(6px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }

      `}</style>
    </>
  );
}
