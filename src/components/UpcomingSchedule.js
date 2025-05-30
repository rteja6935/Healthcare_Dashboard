// import React from 'react';
import '../styles/Upcomingschedule.css';

const scheduleData = [
  {
    day: 'Thursday',
    events: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '💉' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'Saturday',
    events: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑‍⚕️' },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {scheduleData.map((dayData, index) => (
        <div key={index} className="schedule-day">
          <p className="day-label">On {dayData.day}</p>
          <div className="schedule-cards">
            {dayData.events.map((event, idx) => (
              <div className="schedule-card" key={idx}>
                <div className="event-top">
                  <span>{event.title}</span>
                  <span className="event-icon">{event.icon}</span>
                </div>
                <p className="event-time">{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
