import dashboardIcon from '../assets/dashboard-icon.png';
import historyIcon from '../assets/history-icon.png';
import calendarIcon from '../assets/Calendar-icon.png';
import statisticsIcon from '../assets/statistics-icon.png';
import AppointmentsIcon from '../assets/Appointments-icon.png';
import { IoChatbubbleEllipses, IoSettingsSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import '../styles/Sidebar.css'; // Sidebar styling

function Sidebar() {
  const navigationLinks = [
    { icon: dashboardIcon, label: 'Dashboard' },
    { icon: historyIcon, label: 'History' },
    { icon: calendarIcon, label: 'Calendar' },
    { icon: AppointmentsIcon, label: 'Appointments' },
    { icon: statisticsIcon, label: 'Statistics' },
  ];

  const toolLinks = [
    { icon: <IoChatbubbleEllipses />, label: 'Chat' },
    { icon: <FaPhone />, label: 'Support' },
  ];

  return (
    <div className="sidebar">
      <p className="sidebar-title">General</p>
      {navigationLinks.map((link, index) => (
        <div key={index} className="sidebar-item">
          <img src={link.icon} alt={link.label} className="sidebar-icon" />
          <span className="sidebar-label">{link.label}</span>
        </div>
      ))}

      <div className="sidebar-section">
        <p className="sidebar-title">Tools</p>
        {toolLinks.map((link, idx) => (
          <div key={idx} className="sidebar-item">
            <div className="sidebar-icon">{link.icon}</div>
            <span className="sidebar-label">{link.label}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="settings-item">
          <div className="sidebar-icon"><IoSettingsSharp /></div>
          <span className="sidebar-label">Settings</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
