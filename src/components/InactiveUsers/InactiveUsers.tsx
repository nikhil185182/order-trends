// import '../../shared/css/inactive.css';
import React from 'react'
import InactiveChartdisplay from './InactiveChartdisplay';
import DateandDaysSelector from './DateandDaysSelector';
 import '../../shared/css/inactive.css';


const InactiveUsers = () => {
  return (
    <div className='Total_component'>
        <div className='Datepicker_component'>
            <DateandDaysSelector />
        </div>
        <div className='chart_component'>
            <InactiveChartdisplay />            
        </div>      
    </div>
  )
}

export default InactiveUsers





