'use strict'

import { useEffect, useState } from 'react';
import './DashboardPage.css';


export default function DashboardPage () {
  const [rsvpList, setRsvpList] = useState([]);
  const [guestbookList, setGuestbookList] = useState([]);

  const attendingList = rsvpList.filter((item) => item.attendance === 'accept').length;
  const declinedList = rsvpList.filter((item) => item.attendance === 'decline').length;




  useEffect(() => {
    fetch('http://localhost:3000/rsvp')
      .then((response) => response.json())
      .then((data) => {
        console.log('data?',data)
        setRsvpList(data)
      })
      .catch((error) => console.log({message: 'rsvp data failed', error}));

    fetch('http://localhost:3000/guestbook')
      .then((response) => response.json())
      .then((data) => setGuestbookList(data))
      .catch((error) => console.log({message:'guestbook ',error}))
    },[]);



  return (
    <header className='dashboard-container'>
      <div className='count-guest-area'>
        <h3>Wedding dashboard</h3>
        <div className='status-area'>
          {/* <div>
            <p>Total guest</p>  
          </div> */}
          <div>
            <p>Attending</p>
            {attendingList}
          </div>
          <div>
            <p>Declined</p>
            {declinedList}
           </div>
        </div>
      </div>
      <hr className='divider'/>

      <div className='guest-response-area'>
        <h3>Guest response</h3>
        <div>
          <button>All</button>
          <button>Attending</button>
          <button>No attending</button>
        </div>
        {/* <p>Filter by allergy</p>
        <div></div>
        <p>No allergies reported</p>
        <div></div> */}
        <div>
          <div className='guest-data-list'>
            <div>Name</div>
            <div>Status</div>
            <div>Guests</div>
            <div>Allergies</div>
          </div>
            {!rsvpList.length ? (
              <div>No Guest yet</div>
            ) : (rsvpList.map((item) => (
              <div>
                <div className='guest-data-list-reply'>
                  <div key={item._id}>{item.name}</div>
                  <div key={item._id}>{item.attendance}</div>
                  <div key={item._id}>{item.guestCount}</div>      
                  <div key={item._id}>{item.allergy}</div>      
                </div>
              </div>
            )))}
        </div>
      </div>
      <hr className='divider'/>

      <div>
        <h3>Guestbook</h3>
        <p>No messages yey</p>
      </div>
    </header>
  )

}