
import '../styles/CalendarView.css'; // Optional CSS import

function CalendarView() {
  // Static data for the calendar (October 25–31, 2021)
  const calendarData = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, times: ['12:00', '13:00'] },
    { day: 'Thurs', date: 28, times: ['10:00', '11:00', '13:00'] },
    { day: 'Fri', date: 29, times: [] }, // No appointments
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00', '16:00'] },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
  ];

  // Static appointment details for cards below the calendar
  const appointmentDetails = [
    { title: 'Dentist', name: 'Dr. John Smith', time: '09:00 - 10:00' },
    { title: 'Physiotherapy Appointment', name: 'Dr. Emma Watson', time: '12:00 - 13:00' },
  ];

  return (
    <div className="calendar-view">
      {/* Calendar Header */}
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="navigation-arrows">
          <span className="arrow">&larr;</span>
          <span className="arrow">&rarr;</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {/* Day Headers */}
        {calendarData.map((dayData, index) => (
          <div key={index} className="calendar-day-header">
            <span className="day-name">{dayData.day}</span>
            <span className="day-date">{dayData.date}</span>
          </div>
        ))}

        {/* Appointment Times */}
        {calendarData.map((dayData, index) => (
          <div key={index} className="calendar-day-times">
            {dayData.times.length > 0 ? (
              dayData.times.map((time, timeIndex) => (
                <span
                  key={timeIndex}
                  className={`time-slot ${time === '09:00' && dayData.date === 26 ? 'highlighted' : ''}`}
                >
                  {time}
                </span>
              ))
            ) : (
              <span className="no-appointment">—</span>
            )}
          </div>
        ))}
      </div>

      {/* Appointment Details Cards */}
      <div className="appointment-details">
        {appointmentDetails.map((appointment, index) => (
          <div key={index} className="appointment-card">
            <h3 className="appointment-title">{appointment.title}</h3>
            <p className="appointment-name">{appointment.name}</p>
            <p className="appointment-time">{appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;