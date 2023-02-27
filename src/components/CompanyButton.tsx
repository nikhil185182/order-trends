import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";

import {
  CompanyStringSelector,
  DateStringSelector,
} from "../shared/utils/redux/selectors/companySelector";
import { fetchCompanyData } from "../shared/utils/redux/companyAPI";

const CompanyButtonContainer = () => {
  const dispatch = useAppDispatch();
  const companyArray: string[] = useAppSelector(CompanyStringSelector);
  const dateArray: string[] = useAppSelector(DateStringSelector);

  return (
    <Button
      onClick={async () => {
        const cs: string = companyArray.join(",");
        const ds: string = dateArray.join(",");
        dispatch(fetchCompanyData({ companyString: cs, dateString: ds }));
      }}
    >
      submit
    </Button>
  );
};

export default CompanyButtonContainer;
