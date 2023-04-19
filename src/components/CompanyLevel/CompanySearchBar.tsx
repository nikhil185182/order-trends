import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector} from "../../shared/utils/redux/hooks";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { setCompanyString } from "../../containers/CompanyOrderTrend/reducer";
import { CompanySelector } from "../../containers/CompanyOrderTrend/selector";

import SearchIcon from "@mui/icons-material/Search";
import { Chip, autocompleteClasses } from "@mui/material";
import { company } from "../../containers/CompanyOrderTrend/models";
function CompanyAutocomplete(){
const [value,setValue]=useState<company|null>();
const data: company[] = useAppSelector(CompanySelector) || [
  { CompanyName: "Options are loading" },
];
const [companyList, SetCompanyList] = useState<string[]>([]);
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(setCompanyString(companyList));
}, [companyList, dispatch]);
return (
  <div className="searchBar">
    <Autocomplete
      className="searchauto"
      value={value}
      style={{
        border: 0,
        display: "flex",
        flexDirection: "row-reverse",
        height: "10px",
      }}
      onChange={(event,value)=>{
          if(value?.CompanyName!==""){
            SetCompanyList([...companyList,value?.CompanyName!])
            setValue(null);
          }
      }}
      autoHighlight={true}
      disablePortal
      sx={{ width: 200 ,
        height:100,
        [`& .${autocompleteClasses.popupIndicator}`]: {
          transform: "none"
        }}}
        popupIcon={<SearchIcon/>}
      options={data}
      getOptionLabel={(option: company) => option.CompanyName!}
      renderInput={(params) => (
        <TextField {...params} label="Select companies"  />
      )}
    />
    <div className="dateListbox">
      {companyList.map((e, index) => {
        return (
          <Chip
            style={{
              position: "relative",
            }}
            key={index}
            className="chipObject"
            label={e}
            icon={
              <HighlightOffTwoToneIcon
                style={{
                  position: "absolute",
                  right: "10px",
                }}
                onClick={() =>
                  SetCompanyList(companyList.filter((item) => item != e))
                }
              />
            }
            variant="outlined"
          />
        );
      })}
    </div>
  </div>
);
    }
export default CompanyAutocomplete;
