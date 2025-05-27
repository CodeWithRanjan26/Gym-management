import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegisterMember from './components/Registration';
import AddTrainer from './components/TrainerManagement';
import Payment from './components/Payment';
import LogAttendance from './components/Attendance';
import GymClassScheduler from './components/ScheduleClass';
import Footer from './components/Footer';
import Home from './components/Home';
import Service from './components/Service.jsx';

import Form from './components/Form';

import './styles.css';

const App = () => {
  // Set the initial state to 'home' to display the Home section first
  const [activeSection, setActiveSection] = useState('home');

 

  return (
    <div>
      {/* Main Heading */}
      
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
    <img src="/logo.png" alt="FitHub Gym Logo" style={{ width: '100px', height: 'auto' }} />
    <h1 style={{ margin: 0 }}>GYM MANAGEMENT SYSTEM</h1>


  </header>

      <Navbar setActiveSection={setActiveSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'service' && <Service />}
      {activeSection === 'registration' && <RegisterMember />}
      {activeSection === 'trainer' && <AddTrainer />}
      {activeSection === 'payment' && <Payment />}
      {activeSection === 'attendance' && <LogAttendance />}
      {activeSection === 'schedule-class' && <GymClassScheduler />}
      {activeSection === 'Form' && <Form />}
      <Footer />
     
    </div>
  );
};

export default App;
