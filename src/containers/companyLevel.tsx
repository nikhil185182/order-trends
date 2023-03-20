import CompanyButtonContainer from "../components/CompanyLevel/CompanyButton";
import TotalOrdersVsDateGraph from "../components/CompanyLevel/CompanyChart";
import CompanyDatePicker from "../components/CompanyLevel/CompanyDatePicker";
import CompanyRadioButtonContainer from "../components/CompanyLevel/CompanyRadioButtonContainer";
import ReactSearchBar from "../components/CompanyLevel/reactsb";
import "../shared/css/companyLevel.css";
import {
  ButtonComponent,
  ChartComponent,
  DatepickerComponent,
  MainContainer,
  RadioButtonComponent,
  SearchBarComponent,
  SubContainerOne,
  SubcontainerTwo,
} from "../shared/styledComponents/CompanyOrderTrend";
import { Helperutil } from "../shared/utils/redux/companyAPI";

const CompanyTrend = () => {
  Helperutil();
  return (
    <MainContainer>
      <SubContainerOne>
        <SearchBarComponent>
          <ReactSearchBar />
        </SearchBarComponent>
        <DatepickerComponent>
          <CompanyDatePicker />
        </DatepickerComponent>
        <ButtonComponent>
          <CompanyButtonContainer />
        </ButtonComponent>
      </SubContainerOne>
      <SubcontainerTwo>
        <ChartComponent>
          <TotalOrdersVsDateGraph />
        </ChartComponent>
        <RadioButtonComponent>
          <CompanyRadioButtonContainer />
        </RadioButtonComponent>
        </SubcontainerTwo>
    </MainContainer>
  );
};

export default CompanyTrend;
