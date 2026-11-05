'use strict';

import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
   
  const [selectedBtn, setSelectedBtn] = useState('Invitation');
  const [selectedSecondBtn, setSelectedSecondBtn] = useState('');

    return (
    <header className='navbar-container'>
      <div className='tab-btn'>
        <button className={
           selectedBtn === 'Invitation' ? 'tab-btn active' : 'tab-btn'}
           onClick={() => setSelectedBtn('Invitation')}>Invitation
        </button>
        <button className={
          selectedBtn === 'Dashboard' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setSelectedBtn('Dashboard')}>Dashboard
        </button> 
      </div>
      <div className='tab-btn'>
        {['Calendar','Gallery','Location','RSVP','Guestbook'].map((btn) => (
            <button 
              key={btn} 
              className={selectedSecondBtn === btn ? 'tab-btn active-bottom' : 'tab-btn'}
              onClick={() => setSelectedSecondBtn(btn)}
            > {btn}
            
            </button>
        ))}
      </div>
    </header>
  )
}