import React, { useState, useEffect } from "react";
import "../Styles/LogAttendance.css";

const LogAttendance = () => {
  const [memberId, setMemberId] = useState("");
  const [attendanceLog, setAttendanceLog] = useState([]);
  const [members, setMembers] = useState([]);
  const [analysis, setAnalysis] = useState({});

  // Load from localStorage on mount
  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("members")) || [];
    setMembers(savedMembers);

    const savedLogs = JSON.parse(localStorage.getItem("attendanceLog")) || [];
    setAttendanceLog(savedLogs);
  }, []);

  useEffect(() => {
    // Save updated logs to localStorage
    localStorage.setItem("attendanceLog", JSON.stringify(attendanceLog));
    generateAnalysis();
  }, [attendanceLog]);

  const logAttendance = () => {
    const trimmedId = memberId.trim();
    const member = members.find((m) => m.memberId === trimmedId);

    if (member) {
      const date = new Date().toLocaleDateString(); // just date
      const timestamp = new Date().toLocaleString();

      const alreadyMarked = attendanceLog.find(
        (log) => log.memberId === trimmedId && log.date === date
      );

      if (alreadyMarked) {
        alert("⚠️ Attendance already marked today!");
        return;
      }

      const logEntry = {
        date,
        timestamp,
        memberId: trimmedId,
        name: member.name,
        phone: member.phone,
      };

      setAttendanceLog((prev) => [...prev, logEntry]);
      alert(`✅ Marked for ${member.name} on ${date}`);
      setMemberId("");
    } else {
      alert("❌ Invalid Member ID!");
    }
  };

  const generateAnalysis = () => {
    const analysisObj = {};

    // Today’s date for comparison
    const today = new Date();
    const totalDays = 30;

    members.forEach((member) => {
      let present = 0;
      const todayDate = new Date();
      const datesChecked = new Set();

      // Count distinct attendance days
      attendanceLog.forEach((log) => {
        if (log.memberId === member.memberId) {
          datesChecked.add(log.date);
        }
      });

      present = datesChecked.size;
      const absent = totalDays - present;

      analysisObj[member.memberId] = {
        name: member.name,
        present,
        absent,
      };
    });

    setAnalysis(analysisObj);
  };

  return (
    <div className="attendance-container">
      <div className="left-section">
        <h2>📋 Log Attendance</h2>
        <input
          type="text"
          placeholder="Enter Member ID"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
        <button onClick={logAttendance}>✅ Mark Attendance</button>

        <h3>🕒 Attendance History</h3>
        <div className="log-list">
          {attendanceLog.slice().reverse().map((log, index) => (
            <div key={index} className="log-entry">
              <strong>{log.name}</strong> ({log.memberId})<br />
              {log.date} | {log.timestamp}
            </div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <h2>📊 Attendance Analysis (Last 30 Days)</h2>
        {Object.entries(analysis).map(([id, data]) => (
          <div className="analysis-card" key={id}>
            <h4>{data.name}</h4>
            <p>🟢 Present: {data.present} days</p>
            <p>🔴 Absent: {data.absent} days</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogAttendance;
