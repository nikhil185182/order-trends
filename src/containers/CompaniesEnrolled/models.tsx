export type CompaniesEnrolledDTO={
    __typename:String,
    companyCreatedTimeStamp:String,
    namesOfCompanies:String[],
    frequency:number

}
export type CompaniesEnrolledType={
    getCompaniesEnrolled: CompaniesEnrolledDTO[];
}
export type ReduxInitialState = {
    __typename : string,
    fromDate: string;
    toDate: string;
    newUsersdata: CompaniesEnrolledDTO[];
    isDrawerOpen:boolean;
    isLineOrBar:boolean;
    tempcompanieslist:String[];
    barclickedDate:String;
    status:String;
  };