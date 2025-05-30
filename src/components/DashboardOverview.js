import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import UpcomingSchedule from './UpcomingSchedule'
import CalendarView from "./CalendarView";
import ActivityChart from '../components/ActivityChart'
import '../styles/DashboardOverview.css' // Optional CSS import
function DashboardOverview() {
  return (
    <div>
     
    <div className="dashboard-overview">
      <div className='middel-content'>
         <h3 className='dashboard-heading'>Dashboard</h3>
      <div className='middle-top'>
      <AnatomySection />
       <HealthStatusCards/>
      </div>
      <div className='middle-bottom'>
      <ActivityChart />
      </div>
      </div>
      <div className='calendar-and-schedule'>
      <CalendarView />
      <UpcomingSchedule />

      </div>
      {/* Additional sections can be added here */}
    </div>
    </div>
  )
}

export default DashboardOverview