export default function About() {
  return (
    <>
      <div className="about-container">
        <h1>About TravelX</h1>
        <p>
          TravelX is your trusted travel partner, helping you explore the world
          with comfort and ease. From premium destinations to luxury vacation
          packages, we simplify travel planning and create unforgettable
          journeys.
        </p>

        <p>
          Our mission is to make travel smooth, affordable, and memorable for
          everyone. Whether it’s beaches, mountains, cities, or adventure tours,
          we bring the best destinations right to your fingertips.
        </p>
      </div>

      <style>{`
        :root {
          --page-bg: linear-gradient(to bottom, #b3d1ff, #99c2ff);
          --text-dark: #0f1a2b;
        }

        .about-container {
          width: 100%;
          min-height: 100vh;
          padding: 60px 40px;
          background: var(--page-bg);
          color: var(--text-dark);
        }

        .about-container h1 {
          font-size: 40px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
        }

        .about-container p {
          max-width: 800px;
          margin: 20px auto;
          font-size: 20px;
          line-height: 1.6;
          text-align: center;
        }
      `}</style>
    </>
  );
}
