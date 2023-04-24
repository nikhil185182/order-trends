import CompanyDatePicker from "./CompanyInput";
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
import CompanyChartComponent from "./CompanyChart";

const CompanyTrend = () => {
  Helperutil();
  return (
    <MainContainer>
      <SubContainerOne>
        <CompanyDatePicker />
      </SubContainerOne>
      <SubcontainerTwo>
        <CompanyChartComponent/>
      </SubcontainerTwo>
    </MainContainer>
  );
};

export default CompanyTrend;
