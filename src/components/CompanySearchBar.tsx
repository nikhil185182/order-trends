import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import { useEffect } from "react";
import { useState } from "react";
import { company } from "../shared/dto/companyLevelOrderDTO";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";
import { setCompanyString } from "../shared/utils/redux/reducers/companyReducer";
import { CompanySelector } from "../shared/utils/redux/selectors/companySelector";

const CompanyAutocomplete = () => {
  const options: company[] = useAppSelector(CompanySelector) || [
    { CompanyName: "Options are loading" },
  ];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const dispatch = useAppDispatch();


  useEffect(()=>{
    dispatch(setCompanyString(selectedOptions))
    console.log("====================================");
    console.log(`selected copanies list ${selectedOptions}`);
    console.log("====================================");
  },[selectedOptions])



  const handleOnChange = (value: company[]) => {
    console.log("====================================");
    console.log(value);
    console.log("====================================");

    setSelectedOptions(value.map((v) => v.CompanyName));


    
    


  };

  return (
<div className="searchBar">
    <Autocomplete
      multiple
      disablePortal
      options={options}
      onChange={(event, value) => handleOnChange(value)}
      getOptionLabel={(option: company) => option.CompanyName!}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select a company" />
      )}
    />
    </div>
  );
};
export default CompanyAutocomplete;


