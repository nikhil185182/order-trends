import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { fetchOrderTrenData } from './containers/OrderTrend/reducer';
import NewUserDemo from './containers/newCustomers';
import InactiveUsers from './containers/InactiveCustomers';
import CompanyTrend from './containers/companyLevel';
import { InactiveMonths, getInactiveUsersData } from './containers/InactiveCustomers/models';
import { addingInactiveUsersdata, fetchInactiveData, fetchInactiveDate, fetchInactiveMonths } from './containers/InactiveCustomers/reducer';
import { Fetchnewusersdata } from './containers/newCustomers/Reducer';
import OrderTrend from './containers/OrderTrend';



function App() {

  const dispatch = useAppDispatch();

  dispatch(Fetchnewusersdata());
  dispatch(fetchInactiveDate());
  dispatch(fetchInactiveMonths());
 

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="hello">
          <Routes>
            <Route path="/" element={<OrderTrend />} />
            <Route path="/newUsers" element={<NewUserDemo />} />
            <Route path="/companytrend" element={<CompanyTrend  />} />
            <Route path="/inactiveUsers" element={<InactiveUsers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
