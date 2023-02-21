
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderTrendDto } from './shared/dto/orderTrendDto';
import { CompanyUtil, OrderUtil } from './shared/utils/graphql/gqlHelper';
import {  company } from './shared/dto/companyLevelOrderDTO';
import OrderTrend from './components/OrderTrend';
import CompanyTrend from './components/companyLevel';
import { CompanySelector } from './shared/utils/redux/selectors/companySelector';
// import { useAppSelector } from './shared/utils/redux/hooks';

function App() {

  const orderTrend:OrderTrendDto[] = OrderUtil();
  const companyList : company[] = CompanyUtil();


  console.log('====================================');
  console.log(companyList);
  console.log('====================================');

  console.log('====================================');
  // console.log(useAppSelector((state)=>state.company.companies));
  console.log('====================================');


  return (
    <div className="hello">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/order" element={<OrderTrend orderList={orderTrend} />} />
          <Route path = "/company" element = {<CompanyTrend />}/>
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
