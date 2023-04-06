import React, { useEffect, useState } from 'react';
import DateandDaysSelector from '../InactiveDateSelector';
import InactiveTable from '../InactiveTable';
import { Datepicker_component, InactiveUsertable_container, Total_component } from './styledComponents';
import InactiveGraph from '../InactiveGraph';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
          <Tab label="MONTHLY DATA" />
          <Tab label="CONSOLIDATED DATA" />
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

