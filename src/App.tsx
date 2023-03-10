import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OrderTrend from './containers/orderTrend/OrderTrend';
import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { fetchOrderTrenData } from './shared/utils/redux/reducers/orderTrendReducer';
import Dummy from './components/Dummy';
import NewUserDemo from './containers/newCustomers/newUserDemo';
import { Button } from '@mui/material';
import InactiveUsers from './components/InactiveUsers/InactiveUsers';
import CompanyTrend from './containers/companyLevel';
import { getInactiveUsersData } from './shared/dto/InactiveUsersDTO';
import { DataFromGraphql_inactive, DataFromGraphqlUser } from './shared/utils/graphql/gqlHelper';
import { addingInactiveUsersdata30, addingInactiveUsersdata60, addingInactiveUsersdata90, addingInactiveUsersdata120, addingInactiveUsersdata } from './shared/utils/redux/reducers/InactiveUserReducer';
import { Fetchnewusersdata } from './shared/utils/redux/reducers/newUserReducer';



function App() {

  const dispatch = useAppDispatch();

  dispatch(fetchOrderTrenData());
  dispatch(Fetchnewusersdata());


  let displaydata30: getInactiveUsersData[] = DataFromGraphql_inactive(30);
  dispatch(addingInactiveUsersdata30(displaydata30));
  let displaydata60: getInactiveUsersData[] = DataFromGraphql_inactive(60);
  dispatch(addingInactiveUsersdata60(displaydata60));
  let displaydata90: getInactiveUsersData[] = DataFromGraphql_inactive(90);
  dispatch(addingInactiveUsersdata90(displaydata90));
  let displaydata120: getInactiveUsersData[] = DataFromGraphql_inactive(120);
  dispatch(addingInactiveUsersdata120(displaydata120));
  let displaydata: getInactiveUsersData[] = DataFromGraphqlUser();
  dispatch(addingInactiveUsersdata(displaydata));

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="hello">
          <Routes>
            <Route path="/ordertrend" element={<OrderTrend />} />
            <Route path="/newUsers" element={<NewUserDemo />} />
            <Route path="/companylevel" element={<CompanyTrend  />} />\
            <Route path="/inactiveUsers" element={<InactiveUsers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
