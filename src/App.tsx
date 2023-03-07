import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OrderTrend from './containers/orderTrend/OrderTrend';
import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { fetchOrderTrenData } from './shared/utils/redux/reducers/orderTrendReducer';
import Dummy from './components/Dummy';



function App() {

  const dispatch = useAppDispatch();

  dispatch(fetchOrderTrenData());

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="hello">
          <Routes>
            <Route path="/ordertrend" element={<OrderTrend />} />
            {/* <Route path="/company" element={<Dummy />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
