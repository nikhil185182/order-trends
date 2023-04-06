import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { fetchOrderTrenData } from './containers/OrderTrend/reducer';
import InactiveUsers from './containers/InactiveCustomers';
import OrderTrend from './containers/OrderTrend';
import CompaniesEnrolled from './containers/CompaniesEnrolled';
import CompanyTrend from './containers/CompanyOrderTrend';
import { fetchInactiveDate, fetchInactiveMonths } from './containers/InactiveCustomers/reducer';
import { RoutesPath } from './shared/config';
import { FetchCompaniesEnrolledData } from './containers/CompaniesEnrolled/reducer';



function App() {
  
  const dispatch = useAppDispatch();
  dispatch(fetchInactiveDate());
  dispatch(fetchInactiveMonths());
 

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="hello">
          {}
          <Routes>
            <Route path={RoutesPath.orderTrend} element={<OrderTrend />} />
            <Route path={RoutesPath.companiesEnrolled} element={<CompaniesEnrolled />} />
            <Route path={RoutesPath.comapanyOrderTrend} element={<CompanyTrend  />} />
            <Route path={RoutesPath.inactiveCompanies} element={<InactiveUsers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
