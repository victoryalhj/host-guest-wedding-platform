'use strict';

const URL = 'http://localhost:3000';

//Rvsp data to server
export async function postRsvpData(rsvpData) {
  const response = await fetch(`${URL}/rsvp`, {
    method: 'POST',
    body: JSON.stringify(rsvpData),
    headers: {
      'Content-Type':'application/json'
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to post Rsvp')
}

//guestbook data to server
export async function postGuestbookData (guestbookData) {
  const response = await fetch(`${URL}/guestbook`, {
    method: 'POST',
    body: JSON.stringify(guestbookData),
    headers: {
      'Content-Type':'application/json'    
    },
  });
  if (response.ok) {
    return response.json();
  }
}