import React, { useState, useEffect } from "react";
import "../Styles/RegisterMember.css";

const RegisterMemberUnique = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [members, setMembers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("members")) || [];
    setMembers(savedMembers);
  }, []);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const registerMember = () => {
    if (name && phone.length >= 5 && email && plan && expiryDate) {
      const memberId = name.substring(0, 3).toUpperCase() + phone.slice(-5);
      const newMember = { memberId, name, phone, email, plan, expiryDate };

      let updatedMembers;
      if (editingIndex !== null) {
        updatedMembers = [...members];
        updatedMembers[editingIndex] = newMember;
        setEditingIndex(null);
      } else {
        updatedMembers = [...members, newMember];
      }

      setMembers(updatedMembers);
      clearFields();
      alert(`✅ Member ${editingIndex !== null ? "Updated" : "Registered"} Successfully!`);
    } else {
      alert("⚠️ Please fill in all fields correctly.");
    }
  };

  const editMember = (index) => {
    const member = members[index];
    setName(member.name);
    setPhone(member.phone);
    setEmail(member.email);
    setPlan(member.plan);
    setExpiryDate(member.expiryDate);
    setEditingIndex(index);
  };

  const deleteMember = (index) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      const updated = [...members];
      updated.splice(index, 1);
      setMembers(updated);
    }
  };

  const clearFields = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPlan("");
    setExpiryDate("");
    setEditingIndex(null);
  };

  const isExpired = (dateStr) => new Date(dateStr) < new Date();

  const filteredMembers = members.filter((member) =>
    Object.values(member)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="unique-container">
      <h2>{editingIndex !== null ? "Edit Member" : "Register Member"}</h2>

      <form
        className="unique-form"
        onSubmit={(e) => {
          e.preventDefault();
          registerMember();
        }}
        noValidate
      >
        <div className="input-group">
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">👤 Full Name</label>
        </div>

        <div className="input-group">
          <input
            type="tel"
            id="phone"
            required
            minLength="5"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="phone">📞 Phone Number</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">📧 Email Address</label>
        </div>

        <div className="input-group">
          <select
            id="plan"
            required
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="" disabled>
              💳 Choose Membership Plan
            </option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Gold">Gold</option>
          </select>
          <label htmlFor="plan" className="select-label">
            Membership Plan
          </label>
        </div>

        <div className="input-group">
          <input
            type="date"
            id="expiryDate"
            required
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <label htmlFor="expiryDate">📅 Expiry Date</label>
        </div>

        <button type="submit" className="btn-primary">
          {editingIndex !== null ? "Update Member" : "Register Member"}
        </button>
      </form>

      <input
        type="search"
        className="search-bar"
        placeholder="🔍 Search members by any field..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3>
        📋 Members List <span>({filteredMembers.length})</span>
      </h3>

      <div className="table-container">
        <table className="member-table">
          <thead>
            <tr>
              <th>🆔 ID</th>
              <th>👤 Name</th>
              <th>📞 Phone</th>
              <th>📧 Email</th>
              <th>💳 Plan</th>
              <th>📅 Expiry</th>
              <th>⚙️ Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <tr key={index} className={isExpired(member.expiryDate) ? "expired-row" : ""}>
                  <td>{member.memberId}</td>
                  <td>{member.name}</td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td>{member.plan}</td>
                  <td>
                    {member.expiryDate}{" "}
                    {isExpired(member.expiryDate) && (
                      <span className="expired-badge">Expired</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn-icon"
                      title="Edit"
                      onClick={() => editMember(index)}
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-icon delete"
                      title="Delete"
                      onClick={() => deleteMember(index)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">❌ No matching records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterMemberUnique;
