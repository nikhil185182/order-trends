import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import { useEffect } from "react";
import { useState } from "react";
import { company } from "../shared/dto/companyLevelOrderDTO";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";
import { setCompanyString } from "../shared/utils/redux/reducers/companyReducer";
import SearchIcon from '@mui/icons-material/Search';
import { CompanySelector } from "../shared/utils/redux/selectors/companySelector";
import { Height } from "@mui/icons-material";


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
      style={{
        border:0,
        display:"flex",
        flexDirection:"row-reverse",
        height:"10px"
      }}
      autoHighlight={true}
      popupIcon={<SearchIcon/>}
      disablePortal 
      sx={{ width: 200 }}
      options={options}
      onChange={(event, value) => handleOnChange(value)}
      getOptionLabel={(option: company) => option.CompanyName!}
      renderInput={(params) => (
        <TextField {...params} label="Select companies" />
      )}
    />
    
    </div>
  );
};
export default CompanyAutocomplete;


