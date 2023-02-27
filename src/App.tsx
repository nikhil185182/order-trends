
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyTrend from './components/companyLevel';

function App() {   
  return (
    <div className="hello">
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/company" element = {<CompanyTrend />}/>
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
