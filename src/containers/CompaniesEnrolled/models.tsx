export type NewUsersDTO={
    __typename:String,
    companyCreatedTimeStamp:String,
    namesOfCompanies:String[],
    frequency:number

}
export type newusertype={
    NewUsersData:NewUsersDTO[]
}
export type initialstatetypes = {
    __typename : string,
    fromDate: string;
    toDate: string;
    newUsersdata: NewUsersDTO[];
    isDrawerOpen:boolean;
    isLineOrBar:boolean;
    tempcompanieslist:String[];
    barclickedDate:String;
    status:String;
  };