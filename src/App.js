import React, { useState, useRef } from "react";
import axios from "axios";
import Ticket from "./components/Ticket";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [ticketType, setTicketType] = useState("Free");
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [errors, setErrors] = useState({});
  const [ticketData, setTicketData] = useState(null);
  const ticketRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTicketData({ fullName, email, avatarUrl, ticketType, numberOfTickets });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!avatarUrl) newErrors.avatarUrl = "Avatar is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_cloudinary_preset"); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // Replace with your Cloudinary cloud name
        formData
      );
      setAvatarUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>Techember Fest'25</h1>
        <p>Join us for an unforgettable experience in Techember Fest.</p>
      </header>

      <main>
        <section className="ticket-selection">
          <h2>Select Ticket Type</h2>
          <div className="ticket-options">
            <button
              className={ticketType === "Free" ? "active" : ""}
              onClick={() => setTicketType("Free")}
            >
              Free
            </button>
            <button
              className={ticketType === "Regular" ? "active" : ""}
              onClick={() => setTicketType("Regular")}
            >
              Regular Access ($80)
            </button>
            <button
              className={ticketType === "VIP" ? "active" : ""}
              onClick={() => setTicketType("VIP")}
            >
              VIP Access ($160)
            </button>
          </div>
        </section>

        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Avatar:
            <input type="file" onChange={handleAvatarUpload} required />
            {errors.avatarUrl && <span className="error">{errors.avatarUrl}</span>}
          </label>
          <label>
            Number of Tickets:
            <input
              type="number"
              value={numberOfTickets}
              onChange={(e) => setNumberOfTickets(e.target.value)}
              min="1"
              required
            />
          </label>
          <button type="submit">Next</button>
        </form>

        {ticketData && (
          <div ref={ticketRef}>
            <Ticket {...ticketData} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;