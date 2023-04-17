import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyles } from './containers/InactiveCompanies/styledComponents';
import { useAppDispatch } from './shared/utils/redux/hooks';
import InactiveUsers from './containers/InactiveCompanies';
import OrderTrend from './containers/OrderTrend';
import CompaniesEnrolled from './containers/CompaniesEnrolled';
import CompanyTrend from './containers/CompanyOrderTrend';
import { fetchInactiveDate, fetchInactiveMonths } from './containers/InactiveCompanies/reducer';
import { RoutesPath } from './shared/config';
import { fetchOrderTrenData } from './containers/OrderTrend/reducer';
import GlobalSnackBar from './components/SnackBar';

function App() {
  
  const dispatch = useAppDispatch();
  dispatch(fetchOrderTrenData());
  dispatch(fetchInactiveDate());
  dispatch(fetchInactiveMonths());

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar />
        <GlobalSnackBar/>
          <Routes>
            <Route path={RoutesPath.orderTrend} element={<OrderTrend />} />
            <Route path={RoutesPath.companiesEnrolled} element={<CompaniesEnrolled />} />
            <Route path={RoutesPath.comapanyOrderTrend} element={<CompanyTrend  />} />
            <Route path={RoutesPath.inactiveCompanies} element={<InactiveUsers />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;






