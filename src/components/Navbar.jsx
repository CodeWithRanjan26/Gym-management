import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>🏋️ Gym Panel</h2>
        <ul>
          <li onClick={() => handleNavigation('home')}>🏠 Home</li>
          <li onClick={() => handleNavigation('service')}>🛠️ Service</li>
          <li onClick={() => handleNavigation('registration')}>🏋️ Member Registration</li>
          <li onClick={() => handleNavigation('attendance')}>✅ Attendance</li>
          <li onClick={() => handleNavigation('trainer')}>👨‍🏫 Trainer Management</li>
          <li onClick={() => handleNavigation('payment')}>💰 Payment Tracking</li>
          <li onClick={() => handleNavigation('schedule-class')}>📅 Schedule Class</li>
          <li onClick={() => handleNavigation('Form')}>🪪 Login here</li>
        </ul>
      </div>

      {/* Dark Background Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
