
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderTrendDto } from './shared/dto/orderTrendDto';
import { CompanyUtil, GetSpecificCompanyData, OrderUtil } from './shared/utils/graphql/gqlHelper';
import {  company, companyLevel, fres } from './shared/dto/companyLevelOrderDTO';
import OrderTrend from './components/OrderTrend';
import CompanyTrend from './components/companyLevel';
import { CompanySelector } from './shared/utils/redux/selectors/companySelector';
import { useAppDispatch, useAppSelector } from './shared/utils/redux/hooks';
import { fetchCompanies, Helperutil } from './shared/utils/redux/reducers/companyReducer';
import { useEffect } from 'react';

function App() {   
  return (
    <div className="hello">
      <NavBar />
      <Router>
        <Routes>
          {/* <Route path="/order" element={<OrderTrend orderList={orderTrend} />} /> */}
          <Route path = "/company" element = {<CompanyTrend />}/>
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
