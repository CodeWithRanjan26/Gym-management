import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Service.css';

// ✅ Import local images
import trainingImg from '../Assets/training.jpg';
import yogaImg from '../Assets/yoga.jpg';
import nutritionImg from '../Assets/Nutrition.jpg';
import coachingImg from '../Assets/Coaching.jpg';

const services = [
  {
    title: "Gym Training",
    desc: "Personalized strength and endurance training with expert coaches.",
    img: trainingImg,
  },
  {
    title: "Yoga & Meditation",
    desc: "Enhance flexibility, balance, and mindfulness with our guided sessions.",
    img: yogaImg,
  },
  {
    title: "Nutrition Plans",
    desc: "Custom diet plans to match your fitness goals and body type.",
    img: nutritionImg,
  },
  {
    title: "Personal Coaching",
    desc: "One-on-one coaching to keep you motivated and on track.",
    img: coachingImg,
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="service-section">
      <h2 className="section-title">💪 Our Fitness Services</h2>
      <p className="section-subtitle">Designed to help you achieve your health goals</p>
      
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i} data-aos="fade-up">
            <img src={s.img} alt={s.title} className="service-img" />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="/register" className="join-btn">Join Now</a>
          </div>
        ))}
      </div>

      <p className="coming-soon">🚀 More Services Coming Soon!</p>
    </div>
  );
};

export default Service;
