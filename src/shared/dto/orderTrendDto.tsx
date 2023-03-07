export type  OrderTrendDto = {
    __typename : String,
    OrderDate : String,
    AttemptedOrders : Number,
    CompletedOrders : Number,
    TotalOrders : Number
}

export type  getInactiveUsersData = {
    orderDate: any;
    __typename: String;
    CompanyName: String;
    LatestOrderDate: Date;
    Impact: Number;
}

export type Li = {
    ordertrend : OrderTrendDto[];
}

export type Li2 = {
    inactiveusers : getInactiveUsersData[];
}

export type gType = {
    labels: string[];
    datasets: {
        label: string;
        data: Number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}