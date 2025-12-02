import { useLocation } from "react-router-dom";

export default function BookingSuccess() {
  const { state } = useLocation();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>🎉 Thanks For Booking!</h1>
      <p>Your trip has been booked successfully.</p>

      <h3>Booking Details</h3>
      <p><b>Destination:</b> {state?.destination}</p>
      <p><b>Date:</b> {state?.date}</p>
    </div>
  );
}
