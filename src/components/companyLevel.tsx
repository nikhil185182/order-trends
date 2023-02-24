import { useEffect } from "react";
import "../shared/css/companyLevel.css";
import { Cutil, Helperutil } from "../shared/utils/redux/reducers/companyReducer";
import CompanyButtonContainer from "./CompanyButton";
import CompanyDatePicker from "./CompanyDatePicker";
import AutocompleteExample from "./CompanySearchBar";
import CompanySearchBar from "./CompanySearchBar";

const CompanyTrend =  () => {
Helperutil()



  return (
    <>
      <div className="MainContainer">
        <div className="SubContainerOne">
          <div>
            <CompanyDatePicker />
          </div>
          <div >
            {/* <AutocompleteExample /> */}
          </div>
          <div >
          <CompanyButtonContainer />
        </div>
        </div>
        
      </div>
      <div className="subcontainerTwo">{/* <CompanyChart/> */}</div>
    </>
  );
};

export default CompanyTrend;
