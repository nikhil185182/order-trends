// import '../../shared/css/inactive.css';
import React from 'react'
import DateandDaysSelector from '../../components/InactiveUsers/DateandDaysSelector';
import '../../shared/css/inactive.css';
import InactiveTable from '../../components/InactiveUsers/InactiveTable';


const InactiveUsers = () => {
  return (
    <div className='Total_component'>
        <div className='Datepicker_component'>
            <DateandDaysSelector />
        </div>
        <div className='chart_component'>
            <InactiveTable />            
        </div>      
    </div>
  )
}

export default InactiveUsers





