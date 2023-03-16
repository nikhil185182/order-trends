import { Search} from "@mui/icons-material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { company } from "../../shared/dto/companyLevelOrderDTO";
import { useAppDispatch,useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { setCompanyString } from "../../shared/utils/redux/reducers/companyReducer";
import { CompanySelector } from "../../shared/utils/redux/companySelector";
import ReactSearchBox from "react-search-box";


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
  useEffect(() => {
    dispatch(setCompanyString(companyList));
  }, [companyList, dispatch]);
  return (
    <div >
      <div className="sb">
      <ReactSearchBox
        placeholder="Select Companies"
        autoFocus={true}
        data={data1}
        clearOnSelect
        onSelect={(Record:any) => {
          if (companyList.indexOf(Record.item.value) === -1)
            SetCompanyList([...companyList, Record.item.value]);
          else alert("you've already selected it");
        }}
        onFocus={() => true}
        leftIcon={<Search />}
        iconBoxSize="34px"
        inputHeight="40px"
        dropdownHoverColor="rgba(62, 60, 60, 0.2)"
        onChange={() => true}
      />
      </div>
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
                <ClearRoundedIcon
                  style={{
                    position: "absolute",
                    right: "10px",
                  }}
                  onClick={() => SetCompanyList(companyList.filter((item) => item != e))}
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
