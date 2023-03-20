import CompanyButtonContainer from "../components/CompanyLevel/CompanyButton";
import TotalOrdersVsDateGraph from "../components/CompanyLevel/CompanyChart";
import CompanyDatePicker from "../components/CompanyLevel/CompanyDatePicker";
import CompanyRadioButtonContainer from "../components/CompanyLevel/CompanyRadioButtonContainer";
import CompanyAutocomplete from "../components/CompanyLevel/CompanySearchBar";
import ReactSearchBar from "../components/CompanyLevel/reactsb";
import "../shared/css/companyLevel.css";
import { MainContainer, SubContainerOne } from "../shared/styledComponents/CompanyOrderTrend";
import { Helperutil } from "../shared/utils/redux/companyAPI";

const CompanyTrend = () => {
  Helperutil();
  return (
   <MainContainer>
      <SubContainerOne>
        <div className="SearchBarComponent">
          <ReactSearchBar />

        </div>
        <div className="DatepickerComponent">
          <CompanyDatePicker />
        </div>
        <div className="ButtonComponent">
          <CompanyButtonContainer />
        </div>
        </SubContainerOne>
      
      <div className="subcontainerTwo">
        <div className="chartComponent">
        <TotalOrdersVsDateGraph />
        </div>
        <div className="radiobutton">
          <CompanyRadioButtonContainer/>
        </div>
      </div>
      </MainContainer>
  );
};

export default CompanyTrend;
