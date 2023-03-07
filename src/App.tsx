import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import OrderTrend from './components/OrderTrend';
import InactiveUsers from './components/InactiveUsers/InactiveUsers';
import { getInactiveUsersData, OrderTrendDto } from './shared/dto/orderTrendDto';
import { DataFromGraphql, DataFromGraphqlUser, Ordertrendsutil } from './shared/utils/Graphql/gqlHelper';
import { useQuery } from '@apollo/client';
import { INACTIVEUSERS_QUERY } from './shared/utils/Graphql/queries';
import { DAYS } from './shared/config';
import { Li2 } from './shared/dto/orderTrendDto';
import { useAppDispatch, useAppSelector } from './shared/utils/redux/Selectors/hooks';
import { addingInactiveUsersdata, addingInactiveUsersdata120, addingInactiveUsersdata30, addingInactiveUsersdata60, addingInactiveUsersdata90 } from './shared/utils/redux/reducers/InactiveUsersReducer';
import InactiveTable from './components/InactiveUsers/InactiveTable';
import DateandDaysSelector from './components/InactiveUsers/DateandDaysSelector';
import InactiveChartdisplay from './components/InactiveUsers/InactiveChartdisplay';


function App() {


  const dispatch = useAppDispatch();
  let displaydata30: getInactiveUsersData[] = DataFromGraphql(30);
  dispatch(addingInactiveUsersdata30(displaydata30));
  let displaydata60: getInactiveUsersData[] = DataFromGraphql(60);
  dispatch(addingInactiveUsersdata60(displaydata60));
  let displaydata90: getInactiveUsersData[] = DataFromGraphql(90);
  dispatch(addingInactiveUsersdata90(displaydata90));
  let displaydata120: getInactiveUsersData[] = DataFromGraphql(120);
  dispatch(addingInactiveUsersdata120(displaydata120));
  let displaydata: getInactiveUsersData[] = DataFromGraphqlUser();
  dispatch(addingInactiveUsersdata(displaydata));


  return (
    <>
      <BrowserRouter>
      <NavBar />
      <div className="hello">
        <Routes>
          <Route path="/inactiveUsers" element={<InactiveUsers />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
