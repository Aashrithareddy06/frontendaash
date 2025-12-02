import { useLocation } from "react-router-dom";

export default function FlightSuccess() {
  const location = useLocation();
  const airline = location.state?.airline;

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "green", fontSize: "40px" }}>
        Thanks for booking {airline}! ✈️
      </h1>
    </div>
  );
}
