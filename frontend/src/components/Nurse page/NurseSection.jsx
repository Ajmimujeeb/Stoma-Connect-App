// NurseSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NurseSection.css';

const NurseSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/appointments'); // Update the path to your appointment page route
  };

  return (
    <div className="nurse-section" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
      <div className="nurse-content">
        <div className="nurse-media">
          {/* Replace 'nurse.jpg' with the actual image or video file path
          <img src="nurse.jpg" alt="Nurse" className="nurse-image" /> */}
          {/* Uncomment the video tag below and remove the img tag above to use a video instead */}
          <video controls loop autoPlay muted className="nurse-video">
          <source src="/Media/NurseSection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>

        </div>
        <div className="nurse-text">
          <h2>Support from Our Nursing Staff</h2>
          <p>
            "Our dedicated nurses are here to support you every step of the way. With expertise in
            colostomy care, they provide compassionate and professional assistance, ensuring that you
            feel safe, comfortable, and confident."
          </p>
        </div>
      </div>
    </div>
  );
};

export default NurseSection;
