import React, { useEffect, useState } from 'react';
import DateandDaysSelector from '../../components/InactiveUsers/DateandDaysSelector';
import '../../shared/css/inactive.css';
import InactiveTable from '../../components/InactiveUsers/InactiveTable';

const InactiveUsers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="Total_component">
      <div className="Datepicker_component">
        <DateandDaysSelector />
      </div>
      <div className="chart_component">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <InactiveTable />
        )}
      </div>
    </div>
  );
};

export default InactiveUsers;






