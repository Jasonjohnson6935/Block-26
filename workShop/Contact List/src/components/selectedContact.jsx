// SelectedContact.jsx
import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  useEffect(() => {
    console.log('Contact:', contact);
  }, [contact]);

  const goBackToList = () => {
    setSelectedContactId(null);
  };

  if (!contact) {
    return null;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      {/* Add more details as needed */}
      <button onClick={goBackToList}>Go Back</button>
    </div>
  );
}
