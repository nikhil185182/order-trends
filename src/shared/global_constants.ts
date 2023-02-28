import { gType } from "./dto/orderTrendDto";

export const ORDER_TREND = 'Order Trend';
export const COMPANY_TREND = 'Company Level Order Trend';
export const INACTIVE_USER = 'Inactive Customers';
export const NEW_USER = 'New Customers';

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