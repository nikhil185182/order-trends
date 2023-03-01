import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderTrend from './containers/orderTrend/OrderTrend';
import { useAppDispatch } from './redux/selectors/hooks';
import { fetchOrderTrenData, setOrderTrendData } from './redux/reducers/orderTrendReducer';



function App() {

  const dispatch = useAppDispatch();

  dispatch(fetchOrderTrenData());

  return (
    <>
      <NavBar />
      <div className="hello">
          <Routes>
            <Route path="/ordertrend" element={<OrderTrend />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
