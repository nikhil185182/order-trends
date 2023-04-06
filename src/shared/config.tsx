export const DAYS = 865;

export const CompanyLevel_graphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  hoverRadius: 8,
  scales: {

    x: {
      grid: {
        display: true
      },
      title: {
        display: true,
        text: "Order Dates"
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true
      },
      title: {
        display: true,
        text: "Total Number Of Orders"
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

export const ORDERTREND_LINE_GRAPH_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  hoverRadius: 8,
  scales: {

    x: {
      grid: {
        display: true
      },
      title: {
        display: true,
        text: "Order Dates"
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true
      },
      title: {
        display: true,
        text: "Total Number Of Orders"
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

export const ORDERTREND_BAR_GRAPH_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  hoverRadius: 8,
  scales: {

    x: {
      grid: {
        display: false
      },
      title: {
        display: true,
        text: "Order Dates"
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true
      },
      title: {
        display: true,
        text: "Total Number Of Orders"
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};



