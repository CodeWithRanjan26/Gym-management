import React, { useState, useEffect } from "react";
import "../Styles/AddTrainer.css"

const AddTrainer = () => {
  const [trainerName, setTrainerName] = useState("");
  const [expertise, setExpertise] = useState("");
  const [memberId, setMemberId] = useState("");
  const [members, setMembers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [search, setSearch] = useState("");

  // Load members and trainers from localStorage
  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("members")) || [];
    setMembers(savedMembers);

    const savedTrainers = JSON.parse(localStorage.getItem("trainerList")) || [];
    setTrainers(savedTrainers);
  }, []);

  // Save trainers to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("trainerList", JSON.stringify(trainers));
  }, [trainers]);

  const addTrainer = () => {
    const member = members.find((m) => m.memberId === memberId);

    if (trainerName && expertise && member) {
      const newTrainer = {
        trainerName,
        expertise,
        memberName: member.name,
        phone: member.phone,
        memberId: member.memberId,
      };

      setTrainers([...trainers, newTrainer]);

      alert(
        `✅ Trainer Added!\n👤 Trainer: ${trainerName}\n📌 Expertise: ${expertise}\n🔗 Assigned to: ${member.name} (📞 ${member.phone})`
      );

      // Clear input fields
      setTrainerName("");
      setExpertise("");
      setMemberId("");
    } else {
      alert("❌ Invalid Member ID or Missing Trainer Info.");
    }
  };

  const deleteTrainer = (id) => {
    const updated = trainers.filter((t) => t.memberId !== id);
    setTrainers(updated);
  };

  const filteredTrainers = trainers.filter(
    (t) =>
      t.trainerName.toLowerCase().includes(search.toLowerCase()) ||
      t.memberId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="trainer-container" style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add Trainer</h2>
      <input
        type="text"
        placeholder="Trainer Name"
        value={trainerName}
        onChange={(e) => setTrainerName(e.target.value)}
        className="input-field"
      />
      <br />
      <select
        value={expertise}
        onChange={(e) => setExpertise(e.target.value)}
        className="input-field"
      >
        <option value="">Select Expertise</option>
        <option value="Strength Training">Strength Training</option>
        <option value="Cardio">Cardio</option>
        <option value="Yoga">Yoga</option>
        <option value="CrossFit">CrossFit</option>
      </select>
      <br />
      <input
        type="text"
        placeholder="Member ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        className="input-field"
      />
      <br />
      <button onClick={addTrainer}>Add Trainer</button>

      <hr />

      <h3>🔍 Search Trainers</h3>
      <input
        type="text"
        placeholder="Search by Trainer Name or Member ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <h3 style={{ marginTop: "20px" }}>📋 Assigned Trainers</h3>
      {filteredTrainers.length === 0 ? (
        <p>No trainers found.</p>
      ) : (
        filteredTrainers.map((t, index) => (
          <div key={index} className="trainer-card">
            <p>👤 <strong>{t.trainerName}</strong></p>
            <p>📌 Expertise: {t.expertise}</p>
            <p>🔗 Member: {t.memberName} (ID: {t.memberId})</p>
            <p>📞 Phone: {t.phone}</p>
            <button
              onClick={() => deleteTrainer(t.memberId)}
            >
              🗑️ Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AddTrainer;
