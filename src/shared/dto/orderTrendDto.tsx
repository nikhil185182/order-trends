export type  OrderTrendDto = {
    __typename : String,
    OrderDate : String,
    AttemptedOrders : Number,
    CompletedOrders : Number,
    TotalOrders : Number
}

export type GQL_ResponseType = {
    ordertrend : OrderTrendDto[]
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



export type ReduxObjType = {
    Data : OrderTrendDto[],
    orderDateList : OrderTrendDto[],
    status : String
}

export type ReduxOrderDateListType = {
    orderDateList : OrderTrendDto[]
}