import CompanyButtonContainer from "../CompanyButton";
import TotalOrdersVsDateGraph from "../CompanyChart";
import CompanyDatePicker from "../CompanyDatePIcker";
import CompanyRadioButtonContainer from "../CompanyRadioButtonContainer";
import ReactSearchBar from "../CompanySearchBar";
import "../../shared/css/companyLevel.css";
import {
  ChartComponent,
  DatepickerComponent,
  MainContainer,
  RadioButtonComponent,
  SearchBarComponent,
  SubContainerOne,
  SubcontainerTwo,
} from "../../shared/styledComponents/CompanyOrderTrend";
import { Helperutil } from "./API";
import AutocompleteSearch from "../../components/CompanyLevel/mysb";
import CompanyAutocomplete from "../../components/CompanyLevel/CompanySearchBar";
import { useQuery } from "@apollo/client";
import { companiesList, company } from "./models";
import { COMPANIES_QUERY } from "./queries";
import { useAppDispatch } from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import { fetchCompanies } from "./reducer";

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
          <CompanyButtonContainer/>
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
