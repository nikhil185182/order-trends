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
    Months: String;
}
export type GQL_list =  {
    inactivemonths: InactiveMonths[];
}
export type Li2 = {
    inactiveusers : getInactiveUsersData[];
}

export type inacparam = {
    days : number;
}