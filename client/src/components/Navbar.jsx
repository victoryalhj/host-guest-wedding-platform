'use strict';

import { useState } from 'react';
import './Navbar.css';

export default function Navbar({currentTab, setCurrentTab}) {
   
  // const [selectedBtn, setSelectedBtn] = useState('Invitation');
  const [selectedSecondBtn, setSelectedSecondBtn] = useState('');
  function handleScrollTo (btnName) {
    setSelectedSecondBtn(btnName)

    const targetId = btnName.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior:'smooth'})
    }
  }

    return (
    <header className='navbar-container'>
      <div className='tab-btn'>
        <button className={
           currentTab === 'Invitation' ? 'tab-btn active' : 'tab-btn'}
           onClick={() => setCurrentTab('Invitation')}>Invitation
        </button>
        <button className={
          currentTab === 'Dashboard' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setCurrentTab('Dashboard')}>Dashboard
        </button> 
      </div>
      <div className='tab-btn'>
        {['Calendar','Gallery','Location','RSVP','Guestbook'].map((btn) => (
            <button 
              key={btn} 
              className={selectedSecondBtn === btn ? 'tab-btn active-bottom' : 'tab-btn'}
              onClick={() => {
                handleScrollTo(btn)
              
              }}
            > {btn}
            
            </button>
        ))}
      </div>
    </header>
  )
}