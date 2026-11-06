'use strict';


import './GuestbookCard.css'

export default function GuestbookCard () {
  

  return (
    <div className='guestbook'>
      <p>WORDS TO KEEP  FOREVER</p>
      <h3>Guestbook</h3>
      <form className='guest-form-area'>
        <p>Your name</p>
        <input type="text" />

        <p>Your message</p>
        <input type="text" />

        <button className='etc-btn'>Sign guestbook</button>
      </form>

    </div>
  )
}