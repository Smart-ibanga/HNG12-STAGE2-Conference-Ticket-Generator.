import React from 'react'

const Tselection = () => {
  return (
    <section className="ticket-selection">
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
      <form  onSubmit={handleSubmit}>
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
      </form>
  </section>
  )
}

export default Tselection