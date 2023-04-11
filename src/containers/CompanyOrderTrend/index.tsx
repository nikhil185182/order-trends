import CompanyButtonContainer from "../CompanyButton";
import TotalOrdersVsDateGraph from "../CompanyChart";
import CompanyDatePicker from "../CompanyDatePIcker";
import CompanyRadioButtonContainer from "../CompanyRadioButtonContainer";
import ReactSearchBar from "../CompanySearchBar";
import {
  ChartComponent,
  DatepickerComponent,
  MainContainer,
  RadioButtonComponent,
  SearchBarComponent,
  SubContainerOne,
  SubcontainerTwo,
} from "./styledComponents";
import { Helperutil } from "./API";
import { fetchFeature } from "../../shared/utils/redux/reducers/appReducer";
import { useAppDispatch } from "../../shared/utils/redux/selectors/hooks";

const CompanyTrend = () => {
  const dispatch = useAppDispatch();
  Helperutil();
  dispatch(fetchFeature([false,true,false,false])); 
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
