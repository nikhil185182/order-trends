import { ThemeProvider } from "@emotion/react";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import { createStyles, styled } from "@mui/material/styles";
import createTheme, { Theme } from "@mui/material/styles/createTheme";
import makeStyles from "@mui/material/styles/makeStyles";
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
  },[selectedOptions,dispatch])



  const handleOnChange = (value: company[]) => {
    console.log("====================================");
    console.log(value);
    console.log("====================================");

    setSelectedOptions(value.map((v) => v.CompanyName));


    
    


  };

  return (
<div className="searchBar">
    <Autocomplete
    className="searchauto"
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


