export type  getInactiveUsersData = {
    orderDate: any;
    __typename: String;
    CompanyName: String;
    LatestOrderDate: Date;
    Impact: Number;
}

export type InactiveMonths = {
    __typename: String;
    CompanyName: String;
    LastOrderDate: Date;
    Month: string;
    Year: number;
}
export type GQL_list =  {
    getInactiveMonths: InactiveMonths[];
}
export type InactiveList = {
    getInactiveCompanies : getInactiveUsersData[];
}

export type inacparam = {
    days : number;
}