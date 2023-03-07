import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import newUserSlice, { gettingnewUsersDates, settingnewUsersDates } from './shared/utils/redux/reducers/newUserReducer';
import { useAppDispatch } from './shared/utils/redux/selectors/hooks';
import { Fetchnewusersdata,  } from './shared/utils/redux/reducers/newUserReducer';

import NewUserDemo from './containers/newCustomers/newUserDemo';


import NavBar from "./components/NavBar";

  

function App() {

  const dispatch = useAppDispatch();

  
  dispatch(Fetchnewusersdata())

  
  return (
   <div className="hello" style={{width:"100%"}}>
    <header>
          <NavBar />
        </header>
   
      
      <Router>
        <Routes>
          <Route path='/' element={<NewUserDemo/>}/>
          {/* <Route path="/demo" element={<PersistentDrawerRight/>}/> */}
          {/* <Route path='/a' element={<NewUsers />}/>
          <Route path='/table' element={<NewUserTable/>}/>
          <Route path='/s' element={<PersistentDrawerRight />}/> */}
          
        </Routes>
      </Router></div>
    
  );
}

export default App;
