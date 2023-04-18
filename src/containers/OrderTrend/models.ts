export type Orders = {
  __typename: String;
  OrderDate: string;
  AttemptedOrders: Number;
  CompletedOrders: Number;
  TotalOrders: Number;
};

export type OrderTrendGQLResponse = {
  getLastDays: Orders[];
};

export type GraphType = {
  labels: string[];
  datasets: {
    label: string;
    data: Number[];
    borderColor: string;
    backgroundColor: string;
  }[];
};

export type OrderTrendState = {
  statistics: {
    Data: Orders[];
    chartToggle: boolean;
    days: number;
  };
  compare: {
    orderDateList: Orders[];
  };
  status: String;
};
