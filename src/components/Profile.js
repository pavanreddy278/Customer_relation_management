import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/crm')
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
