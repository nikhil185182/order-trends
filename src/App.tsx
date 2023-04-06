import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { fetchOrderTrenData } from './containers/OrderTrend/reducer';
import InactiveUsers from './containers/InactiveCustomers';
import { InactiveMonths, getInactiveUsersData } from './shared/dto/InactiveUsersDTO';
import { DataFromGraphqlUser, InactiveUtil } from './shared/utils/graphql/gqlHelper';
import { addingInactiveUsersdata, fetchInactiveData } from './shared/utils/redux/reducers/InactiveUserReducer';
import { Fetchnewusersdata } from './containers/CompaniesEnrolled/reducer';
import OrderTrend from './containers/OrderTrend';
import CompaniesEnrolled from './containers/CompaniesEnrolled';
import CompanyTrend from './containers/CompanyOrderTrend';



function App() {
  
  const dispatch = useAppDispatch();
  dispatch(Fetchnewusersdata());
  let displaydata: getInactiveUsersData[] = DataFromGraphqlUser();
  dispatch(addingInactiveUsersdata(displaydata));
  let displaydata1: InactiveMonths[] = InactiveUtil();
  dispatch(fetchInactiveData(displaydata1));
 

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="hello">
          <Routes>
            <Route path="/" element={<OrderTrend />} />
            <Route path="/CompaniesEnrolled" element={<CompaniesEnrolled />} />
            <Route path="/CompanyTrend" element={<CompanyTrend  />} />
            <Route path="/inactiveUsers" element={<InactiveUsers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
