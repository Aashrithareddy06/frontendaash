import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      return alert("Please fill all fields!");
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact/send", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank you! We will approach you soon 😊");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Backend error!");
    }
  };

  return (
    <>
      <style>{`
        .contact-page {
          padding: 40px;
          background: linear-gradient(to bottom, #b5d6ff, #d3e7ff);
          min-height: 100vh;
          text-align: center;
        }

        .contact-page h1 {
          font-size: 42px;
          font-weight: 700;
          color: #0b2f66;
          margin-bottom: 10px;
        }

        .contact-page p {
          font-size: 18px;
          color: #444;
          margin-bottom: 40px;
        }

        .contact-form {
          width: 450px;
          background: #ffffffcc;
          padding: 30px;
          margin: auto;
          border-radius: 15px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border-radius: 10px;
          border: 1px solid #b4c8e0;
          background: #f0f6ff;
          transition: 0.2s;
          font-size: 16px;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #0066ff;
          box-shadow: 0 0 6px rgba(0, 102, 255, 0.4);
        }

        .contact-form textarea {
          height: 120px;
          resize: none;
        }

        .contact-form button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(90deg, #ffb400, #ffce3a);
          border: none;
          border-radius: 10px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        .contact-form button:hover {
          background: linear-gradient(90deg, #ff9900, #ffc300);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>We’re here to help you plan your dream trip. Reach out anytime!</p>

        <div className="contact-form">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={form.name}
            onChange={handleChange} 
          />

          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={form.email}
            onChange={handleChange} 
          />

          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            value={form.subject}
            onChange={handleChange} 
          />

          <textarea 
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </>
  );
}
