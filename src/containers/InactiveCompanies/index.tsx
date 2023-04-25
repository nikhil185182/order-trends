import React, { useState } from 'react';
import InactiveGraph from './MonthlyData';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useAppDispatch } from '../../shared/utils/redux/hooks';
import ConsolidatedData from './ConsolidatedData';
import { Switchbox } from './ConsolidatedData/StyledComponents';
import { Totalcomponent } from './styledComponents';

const InactiveUsers = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Totalcomponent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Switchbox>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabSelect}>
          <Tab label="MONTHLY DATA" />
          <Tab label="CONSOLIDATED DATA" />
        </Tabs>
      </Box>
      </Switchbox>
      {activeTab ? <ConsolidatedData/> : <InactiveGraph/>}
    </Totalcomponent>
  );
};



export default InactiveUsers;

