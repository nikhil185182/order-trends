import { useEffect } from "react";
import "../shared/css/companyLevel.css";
import { company } from "../shared/dto/companyLevelOrderDTO";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";
import { Helperutil } from "../shared/utils/redux/reducers/companyReducer";
import { CompanySelector } from "../shared/utils/redux/selectors/companySelector";
import CompanyButtonContainer from "./CompanyButton";
import CompanyChart from "./CompanyChart";
import CompanyDatePicker from "./CompanyDatePicker";
import CompanyAutocomplete from "./CompanySearchBar";
import AutocompleteExample from "./CompanySearchBar";

const CompanyTrend = () => {


    Helperutil()


  return (
    <>
      <div className="MainContainer">
        <div className="SubcontainerOne">
          <CompanyDatePicker />
          <CompanyAutocomplete />
          <CompanyButtonContainer />
        </div>
        <div className="subcontainerTwo">
          <CompanyChart />
        </div>
      </div>
    </>
  );
};

export default CompanyTrend;
