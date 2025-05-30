
import React from 'react';
import '../styles/AnatomySection.css';
import bodyImage from '../assets/body-anatomy.jpg'; // use correct path
import { FaHeart, FaSearchPlus } from 'react-icons/fa';
import { GiLeg } from 'react-icons/gi';

function AnatomySection() {
  return (
    <div className="anatomy-containe">
      <img src={bodyImage} alt="Human Anatomy" className="anatomy-image" />

      {/* Zoom Icon */}
      <div className="zoom-icon">
        <FaSearchPlus />
      </div>

      {/* Heart Label */}
      <div className="health-label heart-label">
        <FaHeart className="label-icon" color='red'/>
        <span>Healthy Heart</span>
      </div>

      {/* Leg Label */}
      <div className="health-label leg-label">
        <GiLeg className="label-icon" color='#FFDBAC'/>
        <span>Healthy Leg</span>
      </div>

      {/* Spinner (bottom curve style) */}
      <div className="spinner">
        <div className="spinner-dot"></div>
      </div>
    </div>
  );
}

export default AnatomySection;
