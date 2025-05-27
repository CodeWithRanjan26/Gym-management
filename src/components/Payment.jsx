import React, { useState, useEffect } from "react";
import "../Styles/Payment.css";

const Payment = () => {
  const [memberId, setMemberId] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [payments, setPayments] = useState([]);
  const [members, setMembers] = useState([]);

  // Load members and payments from localStorage
  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("members")) || [];
    const savedPayments = JSON.parse(localStorage.getItem("payments")) || [];

    setMembers(savedMembers);
    setPayments(savedPayments);
  }, []);

  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  const planPrices = {
    Basic: 3000,
    Premium: 12000,
    Gold: 5000,
  };

  const recordPayment = () => {
    const member = members.find((m) => String(m.memberId) === String(memberId));
    if (!member) {
      alert("❌ Invalid Member ID. Please try again.");
      setPaymentDetails(null);
      return;
    }

    const alreadyPaid = payments.some(
      (p) => String(p.memberId) === String(memberId)
    );
    if (alreadyPaid) {
      alert("⚠️ Payment already recorded for this member.");
      return;
    }

    const amount = planPrices[member.plan] || 0;
    const newPayment = {
      memberId,
      name: member.name,
      plan: member.plan,
      amount,
      phone: member.phone,
      date: new Date().toLocaleDateString(),
    };

    const updatedPayments = [...payments, newPayment];
    setPayments(updatedPayments);
    setPaymentDetails(newPayment);
    setMemberId("");

    alert(`✅ Payment recorded for ${member.name}`);
  };

  const findPayment = () => {
    const payment = payments.find((p) => p.memberId === memberId);
    if (payment) {
      setPaymentDetails(payment);
    } else {
      alert("❌ No payment record found.");
      setPaymentDetails(null);
    }
  };

  const paidMembers = payments.map((p) => p.memberId);
  const unpaidMembers = members.filter((m) => !paidMembers.includes(m.memberId));

  return (
    <div className="payment-container">
      <div className="left-panel">
        <h2>💸 Record Payment</h2>
        <input
          type="text"
          placeholder="Enter Member ID"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
        <div className="btn-group">
          <button onClick={recordPayment}>✅ Record Payment</button>
          <button onClick={findPayment}>🔍 Find Payment</button>
        </div>

        {paymentDetails && (
          <div className="payment-info">
            <h3>🧾 Payment Details</h3>
            <p>🆔 ID: {paymentDetails.memberId}</p>
            <p>👤 Name: {paymentDetails.name}</p>
            <p>📞 Phone: {paymentDetails.phone}</p>
            <p>💳 Plan: {paymentDetails.plan}</p>
            <p>💰 Amount: ₹{paymentDetails.amount}</p>
            <p>🗓️ Date: {paymentDetails.date}</p>
          </div>
        )}
      </div>

      <div className="right-panel">
        <h2>📊 Payment Analysis</h2>

        <div className="analysis-section">
          <h3>✅ Members Who Paid</h3>
          {payments.length === 0 ? (
            <p>No payments recorded yet.</p>
          ) : (
            <ul className="list">
              {payments.map((p, idx) => (
                <li key={idx}>
                  {p.name} ({p.memberId}) - {p.plan} - ₹{p.amount}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="analysis-section unpaid">
          <h3>❌ Members Yet to Pay</h3>
          {unpaidMembers.length === 0 ? (
            <p>All members have paid!</p>
          ) : (
            <ul className="list">
              {unpaidMembers.map((m, idx) => (
                <li key={idx}>
                  {m.name} ({m.memberId}) - Plan: {m.plan}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
