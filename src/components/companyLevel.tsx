import "../shared/css/companyLevel.css";
import { useAppDispatch } from "../shared/utils/redux/hooks";
import { Helperutil } from "../shared/utils/redux/companyAPI";
import CompanyButtonContainer from "./CompanyButton";
import CompanyDatePicker from "./CompanyDatePicker";

import CompanyAutocomplete from "./CompanySearchBar";
import FrequencyVsDateGraph from "./fvd";


const CompanyTrend = () => {


  const dispatch = useAppDispatch()

    Helperutil()

    // dispatch(fetchCompanyData({companyString:"AO CAFE,The Spot,Firehouse Subs",dateString:"2020-04-04,2020-05-06,2021-04-05,2021-07-06,"}))



  return (
    <>
      <div className="MainContainer">
        <div className="SubcontainerOne">
          <CompanyDatePicker />
          <CompanyAutocomplete />
          <CompanyButtonContainer />
        </div>
        <div className="subcontainerTwo">
           <FrequencyVsDateGraph/>
        </div>
      </div>
    </>
  );
};

export default CompanyTrend;
