import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

//import newUserSlice, { gettingnewUsersDates, settingnewUsersDates } from './shared/utils/redux/reducers/newUserReducer';
import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { Fetchnewusersdata,  } from './shared/utils/redux/reducers/newUserReducer';

import NewUserDemo from './containers/newCustomers/newUserDemo';


import NavBar from "./components/NavBar";
import OrderTrend from "./components/OrderTrend";

  

function App() {

  const dispatch = useAppDispatch();

  
  dispatch(Fetchnewusersdata())

  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="hello">
          <Routes>
            <Route path="/newUsers" element={<NewUserDemo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
