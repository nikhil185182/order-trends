import React, { useEffect, useState } from 'react';
import DateandDaysSelector from '../../components/InactiveUsers/DateandDaysSelector';
import '../../shared/css/inactive.css';
import InactiveTable from '../../components/InactiveUsers/InactiveTable';
import { Total_component } from '../../shared/styledComponents/inactiveUserComponents';

const InactiveUsers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
   <Total_component>
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
    </Total_component>
  );
};

export default InactiveUsers;






