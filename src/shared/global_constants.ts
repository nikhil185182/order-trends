import { gType } from "../containers/orderTrend/orderTrendDto";

export const ORDER_TREND = 'Order Trend';
export const COMPANY_TREND = 'Company Order Trend';
export const INACTIVE_USER = 'Inactive Companies';
export const NEW_USER = 'Companies Enrolled';

export const GRAPH_DUMMY_DATA: gType = {
    labels: [],
    datasets: []
}

export const ORDERTREND_DUMMY_DATA = {
    __typename: "",
    OrderDate: "",
    AttemptedOrders: Number.MIN_VALUE,
    CompletedOrders: Number.MIN_VALUE,
    TotalOrders: Number.MIN_VALUE
};

export const ATTEMPTED_ORDERS_LABEL = 'Attempted Orders';
export const COMPLETED_ORDERS_LABEL = 'Completed Orders';
export const TOTAL_ORDERS_LABEL = 'Total Orders';
export const ORANGE = '#FA8231';
export const BLUE = '#3C40C6';
export const GREEN = '#55B74E';

export const DUPLICATE_DATA = "Date already exists in the Graph";
export const DATA_NOT_FOUND = "Date is not found in the database";


export const STATISTICS = "Statistics";
export const CUSTOMISE_COMPARE = "Customise & Compare";