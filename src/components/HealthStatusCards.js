
import '../styles/HealthStatusCards.css'; // Optional CSS import

import toothIcon from '../assets/tooth-icon.png';
import lungsIcon from '../assets/lungs-icon.jpg';
import boneIcon from '../assets/bone-icon.png';

function HealthStatusCards() {
  const healthData = [
   
    { icon: lungsIcon, label: 'Lungs', date: '15 Sep 2021', progress: 90,color: 'red' },
     { icon: toothIcon, label: 'Teeth', date: '26 Okt 2021', progress: 80 },
    { icon: boneIcon, label: 'Bone', date: '10 Aug 2021', progress: 70 },
  ];
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
          <div className="health-status-card">
        <div className="card-content">
          <div className="card-icon-container">
          <img src={item.icon} alt={`${item.label} icon`} className="card-icon" />
             <h3 className="card-label">{item.label}</h3>
             </div>
          <div className="card-details">
            <p className="card-date">Date: {item.date}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>   
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;