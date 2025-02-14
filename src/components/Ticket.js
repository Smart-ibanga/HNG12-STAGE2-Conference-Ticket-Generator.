import React from "react";

function Ticket({ fullName, email, avatarUrl, ticketType, numberOfTickets }) {
  return (
    <div className="ticket-preview">
      <h2>Techember Fest'25 Ticket</h2>
      <img src={avatarUrl} alt="Avatar" className="avatar" />
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Ticket Type: {ticketType}</p>
      <p>Number of Tickets: {numberOfTickets}</p>
    </div>
  );
}

export default Ticket;