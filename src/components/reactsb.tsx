import { Search, Dangerous } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { company } from "../shared/dto/companyLevelOrderDTO";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";
import { setCompanyString } from "../shared/utils/redux/reducers/companyReducer";
import { CompanySelector } from "../shared/utils/redux/selectors/companySelector";

export default function ReactSearchBar() {
  const data: company[] = useAppSelector(CompanySelector) || [
    { CompanyName: "Options are loading" },
  ];

  type datatype = {
    key: string;
    value: string;
  };

  const data1: datatype[] = data.map((item) => {
    const key = item.CompanyName;
    const value = item.CompanyName;
    return { key, value };
  });

  const [companyList, SetCompanyList] = useState<string[]>([]);
  const dispatch = useAppDispatch();


  useEffect(()=>{
    dispatch(setCompanyString(companyList))
  },[companyList,dispatch])

  return (
    <div>
      <ReactSearchBox
        placeholder="Select Companies"
        autoFocus={true}
        data={data1}
        clearOnSelect
        onSelect={(Record) => {
          if(companyList.indexOf(Record.item.value)===-1)
            SetCompanyList([...companyList, Record.item.value]);
          else
            alert("you've already selected it")
        }}
        onFocus={() => true}
        leftIcon={<Search />}
        iconBoxSize="50px"
        inputHeight="40px"
        dropdownHoverColor="rgba(62, 60, 60, 0.2)"
        onChange={() => true}
      />
      <div className="dateListbox">
        {companyList.map((e, index) => {
          return (
            <Chip
              key={index}
              className="chipObject"
              label={e}
              icon={<Dangerous />}
              variant="outlined"
              onClick={() =>
                SetCompanyList(companyList.filter((item) => item !== e))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
