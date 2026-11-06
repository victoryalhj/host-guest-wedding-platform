'use strict';

const URL = 'http://localhost:3000';

// router.get('/rsvp', getRsvpList)
// router.get('/guestbook', getGuestbookList)

export async function getRsvpList () {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Failed to get Rsvp data')
  } 
  return response.json();
}

export async function getGuestbookList () {
  const response = await fetch(URL);
  if(!response.ok) {
    throw new Error('Failed to get guestbook data');
  }
  return response.json();
}

//Rsvp data to server
export default async function postRsvpData(rsvpData) {
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