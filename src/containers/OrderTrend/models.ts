export type  Orders = {
    __typename : String,
    OrderDate : String,
    AttemptedOrders : Number,
    CompletedOrders : Number,
    TotalOrders : Number
}

export type OrdersListType = {
    data : Orders[]
}

export type OrderTrendGQLResponse = {
    getLastDays : Orders[]
}

export type GraphType = {
    labels: string[];
    datasets: {
        label: string;
        data: Number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}

export type OrderTrendState = {
    Data : Orders[],
    orderDateList : Orders[],
    status : String
}