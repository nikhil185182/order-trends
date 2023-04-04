import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { fetchOrderTrenData } from './containers/OrderTrend/reducer';
import NewUserDemo from './containers/newCustomers/newUserDemo';
import InactiveUsers from './containers/inactiveCustomers/InactiveUsers';
import CompanyTrend from './containers/companyLevel';
import { getInactiveUsersData } from './shared/dto/InactiveUsersDTO';
import { DataFromGraphqlUser } from './shared/utils/graphql/gqlHelper';
import { addingInactiveUsersdata } from './shared/utils/redux/reducers/InactiveUserReducer';
import { Fetchnewusersdata } from './shared/utils/redux/reducers/newUserReducer';
import OrderTrend from './containers/OrderTrend';



function App() {

  const dispatch = useAppDispatch();

  dispatch(Fetchnewusersdata());
  let displaydata: getInactiveUsersData[] = DataFromGraphqlUser();
  dispatch(addingInactiveUsersdata(displaydata));

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
