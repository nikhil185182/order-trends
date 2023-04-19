import { Search } from "@mui/icons-material";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/hooks";
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

  const capitalizeFirstLetterOfEachWord = (str: string): string => {
    const words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i] && words[i].length > 0) { 
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      }
    }
    return words.join(' ');
  };
  
  const cData = data.map((company: company) => {
    return {
      CompanyName: capitalizeFirstLetterOfEachWord(company.CompanyName)
    };
  });

  const [searchText, setSearchText] = useState<string>("");
  const [data1, setData1] = useState<searchBarDTO[]>(cData.map((item) => ({
    key: item.CompanyName,
    value: item.CompanyName
  })));

  const filteredData = searchText
  ? cData.filter((item) => item.CompanyName.toLowerCase().startsWith(searchText))
         .slice(0, 10)
         .map((item) => ({
            key: item.CompanyName,
            value: item.CompanyName
         }))
  : cData.slice(0,10).map((item) => ({
        key: item.CompanyName,
        value: item.CompanyName
     }));
     

  useEffect(()=>{
    setData1(filteredData);
  }, [data1]);

  const [companyList, setCompanyList] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCompanyString(companyList));
  }, [companyList, dispatch]);

  return (
    <div>
      <ReactSearchBox
        placeholder="Select Companies"
        autoFocus={true}
        data={data1}
        clearOnSelect
        onSelect={(Record: any) => {
          if (companyList.indexOf(Record.item.value) === -1)
            setCompanyList([...companyList, Record.item.value]);
          else alert("you've already selected it");
        }}
        onFocus={() => true}
        leftIcon={<Search />}
        iconBoxSize="35px"
        inputHeight="45px"
        dropdownHoverColor="rgba(62, 60, 60, 0.2)"
        onChange={(value) => setSearchText(value)}
      />
      <DateListBox>
        {companyList.map((e, index) => {
          return (
            <DateChip
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
                    setCompanyList(companyList.filter((item) => item !== e))
                  }
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
