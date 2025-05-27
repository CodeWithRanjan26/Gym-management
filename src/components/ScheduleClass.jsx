import React, { useState, useEffect } from 'react';
import '../Styles/GymClassScheduler.css';

const GymClassScheduler = () => {
  const [memberId, setMemberId] = useState('');
  const [memberName, setMemberName] = useState('');
  const [classType, setClassType] = useState('');
  const [classDate, setClassDate] = useState('');
  const [classTime, setClassTime] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [filter, setFilter] = useState('');

  // Load from localStorage on initial load
  useEffect(() => {
    const savedClasses = localStorage.getItem('gymClasses');
    if (savedClasses) {
      setScheduledClasses(JSON.parse(savedClasses));
    }
  }, []);

  // Save to localStorage when scheduledClasses changes
  useEffect(() => {
    localStorage.setItem('gymClasses', JSON.stringify(scheduledClasses));
  }, [scheduledClasses]);

  const scheduleClass = () => {
    if (memberId && memberName && classType && classTime && classDate && maxParticipants) {
      const newClass = {
        id: Date.now(),
        memberId,
        memberName,
        classType,
        classDate,
        classTime,
        maxParticipants,
      };

      setScheduledClasses([...scheduledClasses, newClass]);
      alert('✅ Class Scheduled Successfully!');

      // Reset
      setMemberId('');
      setMemberName('');
      setClassType('');
      setClassDate('');
      setClassTime('');
      setMaxParticipants('');
    } else {
      alert('❌ Please fill all fields!');
    }
  };

  const deleteClass = (id) => {
    const updated = scheduledClasses.filter((c) => c.id !== id);
    setScheduledClasses(updated);
  };

  const filteredClasses = filter
    ? scheduledClasses.filter((c) => c.classType === filter)
    : scheduledClasses;

  const classTypeColor = (type) => {
    switch (type) {
      case 'Yoga': return 'green';
      case 'Cardio': return 'orange';
      case 'Strength Training': return 'blue';
      case 'CrossFit': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className='scheduler-container'>
      <h2>🗓️ Gym Class Scheduler</h2>

      <div className='form-section'>
        <input type='text' placeholder='Member ID' value={memberId} onChange={(e) => setMemberId(e.target.value)} />
        <input type='text' placeholder='Member Name' value={memberName} onChange={(e) => setMemberName(e.target.value)} />

        <select value={classType} onChange={(e) => setClassType(e.target.value)}>
          <option value=''>Select Class Type</option>
          <option value='Yoga'>Yoga 🧘‍♀️</option>
          <option value='Strength Training'>Strength Training 💪</option>
          <option value='Cardio'>Cardio ❤️‍🔥</option>
          <option value='CrossFit'>CrossFit 🏋️‍♂️</option>
        </select>

        <input type='date' value={classDate} onChange={(e) => setClassDate(e.target.value)} />
        <input type='time' value={classTime} onChange={(e) => setClassTime(e.target.value)} />
        <input type='number' placeholder='Max Participants' value={maxParticipants} onChange={(e) => setMaxParticipants(e.target.value)} />

        <button onClick={scheduleClass}>📅 Schedule Class</button>
      </div>

      <div className='filter-section'>
        <label>Filter by Class:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value=''>All</option>
          <option value='Yoga'>Yoga</option>
          <option value='Strength Training'>Strength Training</option>
          <option value='Cardio'>Cardio</option>
          <option value='CrossFit'>CrossFit</option>
        </select>
      </div>

      <h3>📋 Scheduled Classes</h3>
      {filteredClasses.length === 0 ? (
        <p>No classes scheduled.</p>
      ) : (
        <div className='class-list'>
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className='class-card'
              style={{ borderLeft: `6px solid ${classTypeColor(item.classType)}` }}
            >
              <h4>{item.classType}</h4>
              <p>👤 {item.memberName} (ID: {item.memberId})</p>
              <p>📅 {item.classDate} 🕒 {item.classTime}</p>
              <p>👥 Max Participants: {item.maxParticipants}</p>
              <button onClick={() => deleteClass(item.id)}>❌ Cancel</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GymClassScheduler;
