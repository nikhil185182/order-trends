import "../shared/css/companyLevel.css";
import { useAppDispatch } from "../shared/utils/redux/hooks";
import { fetchCompanyData, Helperutil } from "../shared/utils/redux/companyAPI";
import CompanyButtonContainer from "./CompanyButton";
import CompanyDatePicker from "./CompanyDatePicker";

import CompanyAutocomplete from "./CompanySearchBar";
import FrequencyVsDateGraph from "./CompanyChart";


const CompanyTrend = () => {


  const dispatch = useAppDispatch()

    Helperutil()
    const cs : string ="AO CAFE,The Spot,Freebirds,Wicks Park Bar & Grill,BBQ Pete's,Del Charro c/o Inn of the Governors,Prime 120,Edgar's Bakery,Food Dance,WCCRS Demo,Happi House,Turner Hall Ballroom"
    dispatch(fetchCompanyData({companyString:cs,dateString:"2020-04-04,2020-05-06,2021-04-05,2021-07-06,2020-09-10"}))

  return (
      <div className="MainContainer">
        <div className="SubcontainerOne">
          <div className="DatepickerComponent"><CompanyDatePicker /></div>
          <div className="SearchBarComponent"><CompanyAutocomplete /></div>
          <div className="ButtonComponent"><CompanyButtonContainer /></div>
        </div>
        <div className="subcontainerTwo">
           <FrequencyVsDateGraph/>
        </div>
      </div>
 
  );
};

export default CompanyTrend;
