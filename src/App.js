import './App.css';
import Headers from './components/Headers';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="app-container">
      {/* main-content is now the scroll container */}
      <div className="main-content">
        {/* Header should scroll along with sidebar + content */}
        <div className="header">
          <Headers />
        </div>
        
        <div className="inner-content">
          <div className="sidebar"> 
            <Sidebar />
          </div>
          <div className="dashboard-content">
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
