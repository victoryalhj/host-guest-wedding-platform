'use strict';
import { useState } from 'react';
import postRsvpData from '../services/services';
import './RsvpForm.css';

export default function RsvpForm () {
  const allergies = ['Nut', 'Gluten','Dairy','Eggs','Shellfish','Soy'];
  const [newName, setNewName] = useState('');
  const [newAttendance, setNewAttendance] = useState('accept');
  const [newGuestCount, setNewGuestCount] = useState('')
  const [newAllergy, setNewAllergy] = useState('');
  const [newOption, setNewOption] = useState('');

  const [selectedBtn, setSelectedBtn] = useState('accept');


  async function handleSubmit (e) {
    e.preventDefault();
    await postRsvpData({
      name: newName,
      attendance: newAttendance,
      guestCount: newGuestCount,
      allergy: newAllergy,
      option: newOption
    });
    setNewName('');
    setNewAttendance('')
    setNewGuestCount('');
    setNewAllergy('');
    setNewOption('');
  }


  
    return (
        <div className='rsvp'>
          <h3>Will you join us?</h3>
          <p>Please reply by 17 March 2027.</p>
          <form onSubmit={handleSubmit} className='form-area'>
            <p>Your name</p>
            <input 
              type="text" 
              required
              placeholder='Your name'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <p>Will you be attending?</p>
            <div className='attend-area'>
              <button 
                className={selectedBtn === 'accept' ? 'attend-area active': 'attend-area'}
                type='button'
                onClick={() => {
                  setNewAttendance('accept');
                  setSelectedBtn('accept');
                }}
              >Joyfully accept</button>
              <button 
                className={selectedBtn === 'decline' ? 'attend-area active': 'attend-area'} 
                type='button' 
                onClick={() => {
                  setNewAttendance('decline');
                  setSelectedBtn('decline');
                  setNewGuestCount(0)
                }}
              >Regretfully decline</button> 
            </div>

            <p>Number of guests</p>
            <input 
              type="number" 
              value={newGuestCount}
              onChange={(e) => setNewGuestCount(e.target.value)}
            />

            {/* Only guest select accept the button */}
            {selectedBtn === 'accept' &&(
            <div>
              <p>Allergies of dietary needs</p>
              <div className='allergy-area'>
                {allergies.map((item, index) => (
                  <button 
                    type='button'
                    key={index}
                    onClick={() => setNewAllergy(item)}
                    className={newAllergy === item ? 'allergy-area active' : ''}
                  >{item}</button>
                ))}
              </div>
            </div>
            )}
           
            <div className='etc-area'>
              <p>Anything else?</p>
              <input 
                type="text" 
                placeholder='Other(optional)'
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
              />
            </div>
            <button className='etc-btn' type='submit'>Send RSVP</button>
          </form>
        </div>
    )
}