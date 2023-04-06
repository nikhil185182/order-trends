import { RootState } from "../../shared/utils/redux/store";

export const CompanySelector = (state: RootState) => state.company.companies;

export const ReqCompanies = (state:RootState)=>state.company.Data

export const CompanyStringSelector = (state:RootState)=>state.company.companyString

export const DateStringSelector = (state:RootState)=>state.company.dateString