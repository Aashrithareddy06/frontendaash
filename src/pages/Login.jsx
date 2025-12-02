import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../api/apiClient";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/auth/login", { email, password });
      const data = response.data;
      console.log("LOGIN RESPONSE:", data);

      if (data.success === true) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      const message = err?.response?.data?.error || err.message || "Login failed";
      alert(message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>

      {/* ---- STYLES ---- */}
      <style>{`
        body {
          background: #001f52 !important;
        }

        .login-page {
          min-height: 100vh;
          background: #001f52;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          color: white;
          border-radius: 18px;
          padding: 35px;
          width: 380px;
          box-shadow: 0 0 25px rgba(0,0,0,0.35);
        }

        .login-box h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 28px;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: none;
          border-radius: 10px;
          background: rgba(255,255,255,0.2);
          color: white;
          font-size: 16px;
        }

        input::placeholder {
          color: #eee;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background: #ffd200;
          color: black;
          cursor: pointer;
          border-radius: 10px;
          border: none;
          font-weight: bold;
          font-size: 16px;
          transition: 0.2s;
        }

        .login-btn:hover {
          background: #ffcc00;
          transform: translateY(-2px);
        }

        .signup-text {
          margin-top: 12px;
          text-align: center;
        }

        .signup-text a {
          color: #ffdd00;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
