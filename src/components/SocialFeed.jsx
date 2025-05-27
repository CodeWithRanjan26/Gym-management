import React, { useState, useEffect } from "react";
import "../Styles/SocialFeed.css";

const feedMessages = [
  "@fitflex: 💥 Transform your mindset. Transform your body. #StrongerEveryDay",
  "@fitflex: 🏋️‍♀️ Today’s grind = Tomorrow’s strength. Show up, push through!",
  "@fitflex: 🔥 7 AM bootcamp just hit different. Who’s joining us tomorrow?",
  "@fitflex: 🥗 Fuel right, feel right. Nutrition tips dropping this Friday!",
  "@fitflex: 💯 Consistency > Perfection. Keep moving, keep growing.",
  "@fitflex: 📅 Just 30 minutes a day can change your life. Start now!",
  "@fitflex: 💪 #NoExcuses – even 10 minutes is better than none!",
  "@fitflex: 🎯 Goal check-in time! What did YOU crush this week?",
  "@fitflex: 🚴‍♂️ Spin class was lit this morning! Reserve your spot early!",
  "@fitflex: 🤝 Workout buddies make gains double. Tag yours today!"
];

const SocialFeed = () => {
  const [index, setIndex] = useState(0);

  /* Change message every 4 seconds */
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % feedMessages.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="social-feed">
      {/* key forces React to restart the fade animation */}
      <p key={index} className="social-line">
        {feedMessages[index]}
      </p>
    </div>
  );
};

export default SocialFeed;
