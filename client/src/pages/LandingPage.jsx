'use strict';

import './LandingPage.css';
import weddingImg from '../assets/wedding_1.jpeg'
import weddingImg2 from '../assets/wedding_2.jpeg'

import RsvpForm from '../components/RsvpForm';
import GuestbookCard from '../components/GuestbookCard';
import Footer from '../components/Footer';

export default function LandingPage() {


  return (
    <header className='landing-container'>
      <div className='image-container'>
        <img src={weddingImg} alt="" />
      </div>

      <div className='our-invitation'>
        <p>OUR INVITATION</p>
        <h1>A lifetime together</h1>
        <h3>Two quiet lives,one long road,and a table with room for you.</h3>
        <p>After years of walking side by side, we have decided to make it official. We would be honoured to have you with us as we begin the next chapter.</p>
      </div>
      <hr className='divider'/>

      <div id='calendar' className='save-the-date'>
        <div>
          <p>SAVE THE DATE</p>
          <h1>17 April 2027</h1>
          <p>Saturday at 2:00 pm</p>
          <p>The Orangery at Hartwell House</p>
        </div>
        <div>
          <img src={weddingImg2} />
        </div>
        <div>
          <p>April 2027</p>
          <div>Calendar</div>
          <div>countdown</div>
          <button>Add to calendar</button>
        </div>
      </div> 
      <hr className='divider'/>

       <div id='gallery' className='gallery'>
        <div></div>
          gallery
       </div>
       <hr className='divider'/> 

       <div id='rsvp'><RsvpForm /></div>
       <hr className='divider'/>

       <div id='guestbook'><GuestbookCard /></div>
       <hr className='divider'/>
       
       <div id='location' className='location'>
          <p>COME CELEBRATE WITH US</p>
          <h3>Where</h3>
          <h3>The Orangery at Hartwell House</h3>
          <p>12 Garden Lane, Hartwell, Kent</p>
          <div>GOOGLE MAP</div>
          <div className='location-btn-area'>
            <button>Copy address</button>
            <button>Open map</button>
          </div>
       </div>
       <hr className='divider'/>

       <Footer />
    </header>
  )

}