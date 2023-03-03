
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyTrend from './containers/companyLevel';

function App() {   
  return (
    <div className="hello" style={{
      margin:0,
      padding:0
    }}>
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/" element = {<CompanyTrend />}/>
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
