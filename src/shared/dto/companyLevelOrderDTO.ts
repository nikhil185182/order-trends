export interface companyLevel {
  Company: string;
  Date: string;
  TotalOrders: number;
}

export interface fres{
  getSpecificCompanyData : companyLevel[]
}

export type reqbody ={
  companyString:String,
  dateString:String
}

export interface company{
  CompanyName:string
}

export type companiesList = {    
 companyLists : company[]
}