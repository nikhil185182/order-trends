export type  getInactiveUsersData = {
    orderDate: any;
    __typename: String;
    CompanyName: String;
    LatestOrderDate: Date;
    Impact: Number;
}


export type Li2 = {
    inactiveusers : getInactiveUsersData[];
}