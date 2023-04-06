import React, { useEffect, useState } from 'react';
import DateandDaysSelector from '../../components/InactiveUsers/DateandDaysSelector';
import '../../shared/css/inactive.css';
import InactiveTable from '../../components/InactiveUsers/InactiveTable';
import { Datepicker_component, InactiveUsertable_container, Total_component } from '../../shared/styledComponents/inactiveUserComponents';
import InactiveGraph from '../../components/InactiveUsers/InactiveGraph';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../../shared/css/inactive.css';

const InactiveUsers = () => {

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setLoading(false);
  }, []);



  const handleTabSelect = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Total_component style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabSelect} aria-label="basic tabs example">
          <Tab label="Inactive Graph" />
          <Tab label="Inactive Table" />
        </Tabs>
      </Box>
      {activeTab === 1 && (
        <>
          <Datepicker_component>
            <DateandDaysSelector />
          </Datepicker_component>
          <InactiveUsertable_container>
            <InactiveTable />
          </InactiveUsertable_container>
        </>
      )}
      {activeTab === 0 && <InactiveGraph />}
    </Total_component>
  );
};



export default InactiveUsers;

