import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/redux/hooks";
import { fetchCompanyDatas, setCompanyString, setDateString } from "../reducer";
import { AppDispatch } from "../../../shared/utils/redux/store";
import { DateChip } from "../../../components/DateChip";
import { DateListBox, DatepickerComponent, SearchBarComponent } from "../styledComponents";
import { company, fres, searchBarDTO } from "../models";
import { CompanySelector, CompanyStringSelector, DateStringSelector } from "../selector";
import { Search } from "@mui/icons-material";
import ReactSearchBox from "react-search-box";
import { useQuery } from "@apollo/client";
import { GETSPECIFICCOMPANIESDATA_QUERY } from "../queries";
import { ContainedButton } from "../../../components/ConatinedButton";


const CompanyDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [dateList, SetDateList] = useState<string[]>([]);
  const [year, setYear] = useState(false);
  const [companyList, setCompanyList] = useState<string[]>([]);
  const dispatch: AppDispatch = useAppDispatch();
  const companyArray: string[] = useAppSelector(CompanyStringSelector);
  const dateArray: string[] = useAppSelector(DateStringSelector);
  const [companyString, setcs] = useState("")
  const [dateString, setds] = useState("")
  const { data, loading, error } = useQuery<fres>(
    GETSPECIFICCOMPANIESDATA_QUERY,
    {
      variables: {
        i1: companyString,
        i2: dateString,
      },
    }
  );
  useEffect(() => {
    dispatch(fetchCompanyDatas(data?.getSpecificCompanyData!))
  }, [data!])

  const handleClick = () => {
    setcs(companyArray.join(",").toString());
    setds(dateArray.join(",").toString())
  }
  const datac: company[] = useAppSelector(CompanySelector) || [
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

  const cData = datac.map((company: company) => {
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
    : cData.slice(0, 10).map((item) => ({
      key: item.CompanyName,
      value: item.CompanyName
    }));


  useEffect(() => {
    setData1(filteredData);
  }, [data1]);


  useEffect(() => {
    dispatch(setCompanyString(companyList));
  }, [companyList, dispatch]);

  useEffect(() => {
    dispatch(setDateString(dateList));
  }, [dateList, dispatch]);
  return (
    <div>
      <SearchBarComponent>
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
      </SearchBarComponent>
      <DatepickerComponent>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className="sha"
            label='Select Dates'
            value={value}
            disableFuture={true}
            onYearChange={() => {
              setYear(!year)
            }}
            views={['year', 'month', 'day']}
            onChange={() => true}
            onAccept={(newValue: any) => {
              setValue(newValue);
              const monthVal: number = newValue?.get("month")! + 1;
              const mVal: string =
                monthVal < 10 ? "0" + monthVal : monthVal.toString();

              const val: string =
                newValue?.get("year").toString()! +
                "-" +
                mVal +
                "-" +
                newValue?.get("date").toString()!;
              if (dateList.indexOf(val) === -1)
                SetDateList([...dateList, val]);
              else
                alert("you've already selected it")
              setValue(null);
            }}
            renderInput={(params) => <TextField size="small"{...params} />}
          />
        </LocalizationProvider>
        <DateListBox>
          {dateList.map((e, index) => {
            return (
              <DateChip
                key={index}
                label={e}
                icon={
                  <HighlightOffTwoToneIcon
                    style={{
                      position: "absolute",
                      right: "10px",
                    }
                    }
                    onClick={() =>
                      SetDateList(dateList.filter((item) => item !== e))
                    }
                  />}
                variant="outlined"
              />
            );
          })}
        </DateListBox>
      </DatepickerComponent>
      <ContainedButton onClick={handleClick} >
        SUBMIT
      </ContainedButton>
    </div>
  );
};

export default CompanyDatePicker;
