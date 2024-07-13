import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SupportTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/crm/support-ticket')
      .then(response => setTickets(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Support Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.issue} - {ticket.status} - {ticket.opened}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SupportTickets;
