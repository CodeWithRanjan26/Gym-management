import React from "react";
import SocialFeed from "./SocialFeed";
import "../Styles/Home.css";


const Home = ({ setActiveSection }) => {
  return (
    <div className="home-container">

      {/* Welcome Banner */}
      <section className="welcome-banner">
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to FitFlex Gym</h1>
          <p className="quote">"Push harder than yesterday if you want a different tomorrow."</p>
          <button className="cta-button" onClick={() => setActiveSection("registration")}>
            Join Now
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <h2>Today's Highlights</h2>
        <div className="stat-grid">
          <div className="stat-card">
            <h2>50+</h2>
            <p>Active Members</p>
          </div>
          <div className="stat-card">
            <h2>8</h2>
            <p>Sessions Today</p>
          </div>
          <div className="stat-card">
            <h2>5</h2>
            <p>Trainers Available</p>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="section">
        <h2>Your Progress</h2>
        <div className="progress-section">
          <p className="goal">Weight Loss: 60%</p>
          <div className="progress-bar"><div className="progress" style={{ width: "60%" }}></div></div>
          <p className="goal">Strength Training: 40%</p>
          <div className="progress-bar"><div className="progress" style={{ width: "40%" }}></div></div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section">
        <h2>Today’s Schedule</h2>
        <ul className="schedule-list">
          <li>7:00 AM - Cardio Blast</li>
          <li>9:00 AM - Strength Training</li>
          <li>6:00 PM - HIIT</li>
        </ul>
      </section>

      {/* Trainers */}
      <section className="section">
        <h2>Meet Our Trainers</h2>
        <div className="trainer-grid">
          <div className="trainer-card">
            <h3>Vishal</h3>
            <p>Cardio Specialist</p>
            <button>Book Session</button>
            <p className="coming-soon">🚀 Book Session Coming Soon!</p>
          </div>
          <div className="trainer-card">
            <h3>Prince</h3>
            <p>Strength Coach</p>
            <button>Book Session</button>
            <p className="coming-soon">🚀 Book Session Coming Soon!</p>
          </div>
          <div className="trainer-card">
            <h3>Raj</h3>
            <p>HIIT Trainer</p>
            <button>Book Session</button>
            <p className="coming-soon">🚀Book Session Coming Soon!</p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2>What Members Say</h2>
        <div className="testimonial">"FitFlex transformed my life! The trainers are amazing." - Sarah</div>
      </section>

      {/* Membership Plans */}
      <section className="section">
        <h2>Choose a Plan</h2>
        <div className="plan-grid">
          <div className="plan-card">
            <h3>Basic</h3>
            <p>Access to gym floor</p>
            <button>Subscribe</button>
            <p className="coming-soon">🚀 Subscription Coming Soon!</p>
          </div>
          <div className="plan-card">
            <h3>Premium</h3>
            <p>Gym + Classes</p>
            <button>Subscribe</button>
            <p className="coming-soon">🚀 Subscription Coming Soon!</p>
          </div>
          <div className="plan-card">
            <h3>Elite</h3>
            <p>All Access + Personal Trainer</p>
            <button>Subscribe</button>
            <p className="coming-soon">🚀 Subscription Coming Soon!</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <h2>Achievements</h2>
        <ul className="achievement-list">
          <li>100+ KGs lost by members</li>
          <li>Best Gym Award 2023</li>
        </ul>
      </section>

      {/* Social Feed */}
      <section className="section">
        <h2>From Our Socials</h2>
        <SocialFeed />
      </section>


      {/* Final Call-to-Action */}
      <section className="section text-center">
        <h2>Ready to Transform?</h2>
        <button className="final-cta" onClick={() => setActiveSection("registration")}>
          Become a Member
        </button>
      </section>
    </div>
  );
};

export default Home;
