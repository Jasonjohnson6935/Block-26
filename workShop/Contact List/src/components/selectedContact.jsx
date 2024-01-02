// SelectedContact.jsx
import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching contact: ${response.statusText}`);
        }

        const result = await response.json();
        setSelectedContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  if (!selectedContact) {
    return null;
  }

  return (
    <div>
      <h2>{selectedContact.name}</h2>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
}
