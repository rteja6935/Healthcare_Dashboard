import React from 'react';
import '../styles/ActivityChart.css';


const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const data = [
  [80, 50, 30,15],
  [80, 50, 30,15],
  [80, 50, 30,15],
  [80, 50, 30,15],
  [80, 50, 30,15],
  [80, 50, 30,15],
  [80, 50, 30,15],
];

const ActivityChart = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h4>Activity</h4>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-chart">
        {data.map((bars, dayIndex) => (
          <div className="day-column" key={dayIndex}>
            <div className="bar-group">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className="day-label">{days[dayIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
