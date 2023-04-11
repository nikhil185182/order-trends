import { Search} from "@mui/icons-material";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch,useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { setCompanyString } from "../CompanyOrderTrend/reducer";
import { CompanySelector } from "../CompanyOrderTrend/selector";
import ReactSearchBox from "react-search-box";
import { DateChip } from "../../components/DateChip";
import { DateListBox } from "../CompanyOrderTrend/styledComponents";
import { company, searchBarDTO } from "../CompanyOrderTrend/models";
export default function ReactSearchBar() {

  const data: company[] = useAppSelector(CompanySelector) || [
    { CompanyName: "Options are loading" },
  ];
  const data1: searchBarDTO[] = data.map((item) => {
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
        iconBoxSize="35px"
        inputHeight="45px"
        dropdownHoverColor="rgba(62, 60, 60, 0.2)"
        onChange={() => true}
      />
      </div>
      <DateListBox>
        {companyList.map((e, index) => {
          return (
            <DateChip
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
                  onClick={() => SetCompanyList(companyList.filter((item) => item != e))}
                />
              }
              variant="outlined"
            />
          );
        })}
      </DateListBox>
    </div>
  );
}
