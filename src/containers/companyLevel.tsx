import "../shared/css/companyLevel.css";
import { Helperutil } from "../shared/utils/redux/companyAPI";
import CompanyButtonContainer from "../components/CompanyButton";
import CompanyDatePicker from "../components/CompanyDatePicker";
import FrequencyVsDateGraph from "../components/CompanyChart";
import ReactSearchBar from "../components/reactsb";
import CompanyRadioButtonContainer from "../components/CompanyRadioButtonContainer";

const CompanyTrend = () => {
  Helperutil();
  return (
    <div className="MainContainer">
      <div className="SubcontainerOne">
        <div className="SearchBarComponent">
          <ReactSearchBar />
        </div>
        <div className="DatepickerComponent">
          <CompanyDatePicker />
        </div>
        <div className="ButtonComponent">
          <CompanyButtonContainer />
        </div>
      </div>
      <div className="subcontainerTwo">
        <div className="chartComponent">
        <FrequencyVsDateGraph />
        </div>
        <div className="radiobutton">
          <CompanyRadioButtonContainer/>
        </div>
      </div>
    </div>
  );
};

export default CompanyTrend;
