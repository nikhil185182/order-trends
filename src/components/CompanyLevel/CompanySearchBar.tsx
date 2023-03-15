import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import { useEffect } from "react";
import { useState } from "react";
import { company } from "../../shared/dto/companyLevelOrderDTO";
import { useAppDispatch,useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { setCompanyString } from "../../shared/utils/redux/reducers/companyReducer";
import { CompanySelector } from "../../shared/utils/redux/companySelector";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Chip, InputAdornment } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';



const CompanyAutocomplete = () => {


  const options: company[] = useAppSelector(CompanySelector) || [
    { CompanyName: "Options are loading" },
  ];

  const [svalue,setValue]=useState<company>({
    CompanyName:""
  });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dispatch = useAppDispatch();


  useEffect(()=>{
    dispatch(setCompanyString(selectedOptions))
    console.log("====================================");
    console.log(`selected copanies list ${selectedOptions}`);
    console.log("====================================");
  },[selectedOptions,dispatch])



  const handleOnChange = (value: company) => {
    console.log("====================================");
    console.log(value);
    console.log("====================================");
    setSelectedOptions([...selectedOptions,value.CompanyName]);
  };

  return (
<div>
  <div className="sb">
    <Autocomplete
      className="searchauto"
      value={svalue}
      onChange={(event, svalue) => {
        handleOnChange(svalue!)
        setValue({
          CompanyName:""
        })
      }}
      disablePortal 
      sx={{ 
        width:200
      }}
      options={options}
      getOptionLabel={(option: company) => option.CompanyName!}
      renderInput={(params) => (
        <TextField {...params}
         label="Select companies" 

         />
      )}
    />
    </div>
    <div className="dateListbox">
        {selectedOptions.map((e, index) => {
          return (
            <Chip
              style={{
                position: "relative",
              }}
              key={index}
              className="chipObject"
              label={e}
              icon={
                <ClearRoundedIcon
                  style={{
                    position: "absolute",
                    right: "10px",
                  }}
                  onClick={() => setSelectedOptions(selectedOptions.filter((item) => item != e))}
                />
              }
              variant="outlined"
            />
          );
        })}
  </div>
</div>

  );
};
export default CompanyAutocomplete;


