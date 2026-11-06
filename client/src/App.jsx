import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentTab, setCurrentTab] = useState('Invitation');

  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {currentTab === 'Invitation' ? (
        <LandingPage />  
      ) : (
        <DashboardPage />
      )}

    </div>
  )
}

export default App
