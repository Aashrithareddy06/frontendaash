import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert("Signup successful!");
      navigate("/dashboard");
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />

        <button type="submit">Signup</button>
      </form>

      <style>{`
        .auth-container {
          max-width: 400px;
          margin: 80px auto;
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          text-align: center;
        }

        .auth-form input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #0066ff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
        }

        button:hover {
          background: #0050d4;
        }
      `}</style>
    </div>
  );
}
